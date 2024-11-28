// Interface for the Candidate objects returned by the API
export interface IGithubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  }
//   Made by Waleed
  export interface ICandidate extends IGithubUser {
    name: string | null;
    location: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    created_at: string;
    updated_at: string;
    followers: number;
    following: number;
    public_repos: number;
  }