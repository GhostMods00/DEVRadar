import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { ICandidate } from '../interfaces/Candidate.interface';
import { Plus, Minus } from 'lucide-react';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<ICandidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [retryCount, setRetryCount] = useState<number>(0);

  // Load saved candidates from localStorage
  const getSavedCandidates = (): ICandidate[] => {
    const saved = localStorage.getItem('savedCandidates');
    return saved ? JSON.parse(saved) : [];
  };

  // Save candidate to localStorage
  const saveCandidate = (candidate: ICandidate) => {
    const savedCandidates = getSavedCandidates();
    const updatedCandidates = [...savedCandidates, candidate];
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  // Load next candidate
  const loadNextCandidate = async () => {
    setLoading(true);
    setError('');
    
    try {
      const users = await searchGithub();
      console.log('Fetched users:', users); // Debug log

      if (users && users.length > 0) {
        // Try to get a user that isn't already saved
        const savedCandidates = getSavedCandidates();
        const unsavedUser = users.find(user => 
          !savedCandidates.some(saved => saved.id === user.id)
        );

        if (unsavedUser) {
          const userDetails = await searchGithubUser(unsavedUser.login);
          if (userDetails) {
            setCurrentCandidate(userDetails);
            setRetryCount(0); // Reset retry count on success
          } else {
            setError('Error loading candidate details');
          }
        } else {
          // If all users are saved, try again with new users
          if (retryCount < 3) {
            setRetryCount(prev => prev + 1);
            loadNextCandidate();
          } else {
            setError('No more candidates available at the moment. Please try again later.');
          }
        }
      } else {
        setError('No candidates available. Please try again.');
      }
    } catch (err) {
      console.error('Error in loadNextCandidate:', err);
      setError('Error loading candidate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadNextCandidate();
  }, []);

  // Handle accept button click
  const handleAccept = () => {
    if (currentCandidate) {
      saveCandidate(currentCandidate);
      loadNextCandidate();
    }
  };

  // Handle reject button click
  const handleReject = () => {
    loadNextCandidate();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Candidate Search
        </h1>
        {/* Made with Waleed */}

        {error ? (
          <div className="max-w-md mx-auto bg-red-500/20 backdrop-blur-sm rounded-lg p-6 text-white text-center">
            {error}
            <button
              onClick={() => {
                setRetryCount(0);
                loadNextCandidate();
              }}
              className="mt-4 bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : currentCandidate ? (
          <div className="max-w-md mx-auto bg-black/20 backdrop-blur-sm rounded-lg p-6">
            {/* Rest of your candidate card JSX */}
            <div className="flex flex-col items-center">
              <img
                src={currentCandidate.avatar_url}
                alt={`${currentCandidate.login}'s avatar`}
                className="w-32 h-32 rounded-lg mb-4"
              />
              
              <h2 className="text-xl text-white font-bold mb-4">
                {currentCandidate.name || currentCandidate.login}
                <span className="text-gray-300 ml-2">({currentCandidate.login})</span>
              </h2>

              <div className="text-white space-y-2 w-full">
                <p>Location: {currentCandidate.location || 'Not specified'}</p>
                <p>
                  Email:{' '}
                  {currentCandidate.email ? (
                    <a href={`mailto:${currentCandidate.email}`} className="text-blue-300">
                      {currentCandidate.email}
                    </a>
                  ) : (
                    'Not specified'
                  )}
                </p>
                <p>Company: {currentCandidate.company || 'Not specified'}</p>
                <p>Bio: {currentCandidate.bio || 'No bio available'}</p>
              </div>

              <div className="flex gap-8 mt-8">
                <button
                  onClick={handleReject}
                  className="btn-reject"
                  aria-label="Reject candidate"
                >
                  <Minus size={24} />
                </button>
                <button
                  onClick={handleAccept}
                  className="btn-accept"
                  aria-label="Accept candidate"
                >
                  <Plus size={24} />
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CandidateSearch;