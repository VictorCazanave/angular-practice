import { Component } from '@angular/core';
import { SearchService } from './search.service'

@Component({
	selector: 'search',
	templateUrl: './app/search.component.html',
	providers: [SearchService]
})

export class SearchComponent {
	readonly defaultCover: cover;
	games: game[];

	constructor(private searchService: SearchService) {
		this.defaultCover = {
			url: 'http://yeutretho.websan.vn/media/crop/190x125/',
			width: 190,
			height: 200
		};
	}

	search(event: any, query: string): Promise<any> {
		event.preventDefault();

		return this.searchService.search(query)
			.then(response => {
				this.games = response.json() as game[]
			})
			.catch(error => {
				console.error('Error', error);
			});
	}
}

interface game {
	id: number;
	name: string;
	rating: number;
	cover: cover;
}

interface cover {
	url: string;
	width: number;
	height: number;
}
