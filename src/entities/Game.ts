import { Platform } from './Platform';

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  description: string;
  description_raw: string;
}
