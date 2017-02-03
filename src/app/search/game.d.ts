import { Image } from './image'

export interface Game {
	id: number;
	name?: string;
	rating?: number;
	summary?: string;
	first_release_date?: string;
	cover?: Image;
	screenshots?: Image[];
}
