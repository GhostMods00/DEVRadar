import { useState, useEffect } from 'react';
import { ICandidate } from '../interfaces/Candidate.interface';
import { Minus } from 'lucide-react';

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<ICandidate[]>([]);

  // Load saved candidates from localStorage
  useEffect(() => {
    const loadSavedCandidates = () => {
      const saved = localStorage.getItem('savedCandidates');
      if (saved) {
        setSavedCandidates(JSON.parse(saved));
      }
    };

    loadSavedCandidates();
  }, []);

  // Handle reject candidate
  const handleReject = (id: number) => {
    const updatedCandidates = savedCandidates.filter(
      candidate => candidate.id !== id
    );
    setSavedCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Potential Candidates
        </h1>

        {savedCandidates.length > 0 ? (
          <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-6 py-3 text-left text-white">Image</th>
                    <th className="px-6 py-3 text-left text-white">Name</th>
                    <th className="px-6 py-3 text-left text-white">Location</th>
                    <th className="px-6 py-3 text-left text-white">Email</th>
                    <th className="px-6 py-3 text-left text-white">Company</th>
                    <th className="px-6 py-3 text-left text-white">Bio</th>
                    <th className="px-6 py-3 text-left text-white">Reject</th>
                  </tr>
                </thead>
                <tbody>
                  {savedCandidates.map((candidate) => (
                    <tr 
                      key={candidate.id} 
                      className="border-b border-gray-700 hover:bg-black/10"
                    >
                      <td className="px-6 py-4">
                        <img
                          src={candidate.avatar_url}
                          alt={`${candidate.login}'s avatar`}
                          className="w-12 h-12 rounded-full"
                        />
                        {/* MADE BY WALEED */}
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-white">
                          {candidate.name || candidate.login}
                        </div>
                        <div className="text-gray-400 text-sm">
                          ({candidate.login})
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white">
                        {candidate.location || 'Not specified'}
                      </td>
                      <td className="px-6 py-4">
                        {candidate.email ? (
                          <a 
                            href={`mailto:${candidate.email}`}
                            className="text-blue-300 hover:text-blue-400"
                          >
                            {candidate.email}
                          </a>
                        ) : (
                          <span className="text-gray-400">Not specified</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-white">
                        {candidate.company || 'Not specified'}
                      </td>
                      <td className="px-6 py-4 text-white">
                        {candidate.bio || 'No bio available'}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleReject(candidate.id)}
                          className="btn-reject w-8 h-8"
                          aria-label={`Reject ${candidate.name || candidate.login}`}
                        >
                          <Minus size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center text-white text-xl">
            No candidates have been accepted yet
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedCandidates;