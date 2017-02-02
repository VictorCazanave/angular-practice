import { Component } from '@angular/core';
import { SearchService } from './search.service'

@Component({
	selector: 'search',
	// TODO: Use relative paths! Big fail for now...
	//moduleId: module.id,
	templateUrl: './app/search/search.component.html',
	providers: [SearchService]
})

export class SearchComponent {

	// TIPS: 'const' keyword can't be used to declare class properties
	// http://stackoverflow.com/a/37265481
	readonly defaultCover: cover;
	games: game[];
	error: string;

	constructor(private _searchService: SearchService) {
		this.defaultCover = {
			url: 'http://yeutretho.websan.vn/media/crop/190x125/',
			width: 190,
			height: 125
		};
	}

	search(event: any, query: string): Promise<any> {
		event.preventDefault();

		return this._searchService.search(query)
			.then(response => {
				this.games = response.json() as game[]
			})
			.catch(error => {
				this.error = error.json().message;
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
