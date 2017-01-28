import { Component } from '@angular/core';
import { SearchService } from './search.service'

@Component({
	selector: 'search',
	templateUrl: './app/search.component.html',
	providers: [SearchService]
})

export class SearchComponent {
	games: game[];

	constructor(private searchService: SearchService) { }

	search(event: any): Promise<any> {
		event.preventDefault();
		console.log('search');

		return this.searchService.search('witcher')
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
}
