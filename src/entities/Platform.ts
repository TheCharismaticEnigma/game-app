export interface Platform {
  id: number;
  slug: string;
  name: string;
  platforms: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
  }[];
}
