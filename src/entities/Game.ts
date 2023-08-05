import { Developer } from './Developer';
import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  publishers: Publisher[];
  genres: Genre[];
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  description: string;
  description_raw: string;
  website: string;
  updated: string; // updated date.
  released: string;
  playtime: number;
  game_series_count: number;
  developers: Developer[];
}
