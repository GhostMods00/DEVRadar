import { IGithubUser, ICandidate } from '../interfaces/Candidate.interface';

const searchGithub = async (): Promise<IGithubUser[]> => {
  try {
    // Debug logs
    console.log('Starting GitHub API call');
    console.log('Environment variables loaded:', {
      hasToken: !!import.meta.env.VITE_GITHUB_TOKEN,
      tokenPrefix: import.meta.env.VITE_GITHUB_TOKEN?.substring(0, 4) // Only log prefix for security
    });

    const start = Math.floor(Math.random() * 1000000);
    const url = `https://api.github.com/users?per_page=30&since=${start}`;
    console.log('Request URL:', url);

    // Create headers object
    const headers = {
      'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json'
    };
    
    console.log('Request headers:', {
      ...headers,
      'Authorization': 'token [HIDDEN]' // Don't log actual token
    });

    const response = await fetch(url, { headers });

    // Log response status
    console.log('Response status:', response.status);
    console.log('Response status text:', response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      
      throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Successful response with', data.length, 'users');
    return data;
  } catch (err) {
    console.error('Detailed error:', err);
    return [];
  }
};

const searchGithubUser = async (username: string): Promise<ICandidate | null> => {
  try {
    console.log('Fetching details for user:', username);

    const response = await fetch(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          'Authorization': `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching user details:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      throw new Error(`Failed to fetch user details: ${response.status}`);
    }

    const data = await response.json();
    console.log('User details received:', username);
    return data;
  } catch (err) {
    console.error('Error in searchGithubUser:', err);
    return null;
  }
};

export { searchGithub, searchGithubUser };