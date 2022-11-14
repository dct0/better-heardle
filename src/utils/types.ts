export interface GuessProps {
  enabled: boolean;
  correct: boolean;
  title: string;
}

export interface PlaylistOverview {
  collaborative: boolean;
  description: string | null;
  external_urls: {
    spotify: string;
  };
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
