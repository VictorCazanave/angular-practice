import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

	constructor(private http: Http) {
		let headers = new Headers({
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-Mashape-Key': 'Use your own API key!'
		});
	}

	search(query: string) {
		let headers = new Headers({
			'Accept': 'application/json',
			'X-Mashape-Key': 'Oupsy'
		});
		console.log('search service', query)

		return this.http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=10&offset=0&search=' + query, { headers: headers })
			.toPromise();
	}
}
