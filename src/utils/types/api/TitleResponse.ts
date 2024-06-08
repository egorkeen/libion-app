export interface TitleResponse {
  id: number;
  code: string;
  names: Names;
  franchises: Franchise[];
  announce: string;
  status: Status;
  posters: Posters;
  updated: number;
  last_change: number;
  type: Type;
  genres: string[];
  team: Team;
  season: Season;
  description: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: Torrents;
}

interface Names {
  ru: string;
  en: string;
  alternative: string | null;
}

interface Franchise {
  franchise: FranchiseDetails;
  releases: Release[];
}

interface FranchiseDetails {
  id: string;
  name: string;
}

interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: Names;
}

interface Status {
  string: string;
  code: number;
}

interface Posters {
  small: Poster;
  medium: Poster;
  original: Poster;
}

interface Poster {
  url: string;
  raw_base64_file: string | null;
}

interface Type {
  full_string: string;
  string: string;
  episodes: number | null;
  length: number;
  code: number;
}

interface Team {
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: string[];
}

interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

interface Blocked {
  blocked: boolean;
  bakanim: boolean;
}

interface Player {
  alternative_player: string | null;
  host: string;
  episodes: Episodes;
  list: Record<string, Episode>;
  rutube: Record<string, any>;
}

interface Episodes {
  first: number;
  last: number;
  string: string;
}

interface Episode {
  episode: number;
  name: string | null;
  uuid: string;
  created_timestamp: number;
  preview: string | null;
  skips: Skips;
  hls: HLS;
}

interface Skips {
  opening: number[];
  ending: number[];
}

interface HLS {
  fhd: string;
  hd: string;
  sd: string;
}

interface Torrents {
  episodes: Episodes;
  list: Torrent[];
}

interface Torrent {
  torrent_id: number;
  episodes: Episodes;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: Metadata | null;
  raw_base64_file: string | null;
}

interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: boolean | null;
}

interface Metadata {
  hash: string;
  name: string;
  announce: string[];
  created_timestamp: number;
  files_list: File[];
}

interface File {
  file: string;
  size: number;
  size_string: string;
  offset: number;
}
