import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {

	private _headers: Headers;

	constructor(private _http: Http) {
		this._headers = new Headers({
			'Accept': 'application/json',
			'X-Mashape-Key': 'Use your own API key'
		});
	}

	search(query: string) {
		return this._http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,rating,cover&limit=10&offset=0&search=' + query, { headers: this._headers })
			.toPromise();
	}
}
