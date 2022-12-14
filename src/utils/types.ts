export interface GuessProps {
  enabled: boolean;
  correct: boolean;
  title: string;
}

export interface PlaylistOverview {
  collaborative: boolean;
  description: string;
  external_urls: {
    spotify: string;
  };
  id: string;
  images: {
    url: string;
    height: number | null;
    width: number | null;
  }[];
  name: string;
  tracks: {
    href: string;
    total: number;
  };
}

export interface SpotifyTrack {
  is_local: boolean;
  track: {
    name: string;
    preview_url: string | null;
  };
}

export type Tracks = SpotifyTrack[];
