export interface User {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: Date;
  email: string | null;
  events_url: string | null;
  followers: number;
  following: number;
  following_url: string | null;
  gists_url: string | null;
  gravatar_id: string | null;
  hireable: boolean | null;
  html_url: string | null;
  id: number;
  location: string | null;
  login: string;
  name: string;
  note_id: string;
  organizations_url: string | null;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: Date;
  url: string;
}

export interface UserState {
  user: User;
}
