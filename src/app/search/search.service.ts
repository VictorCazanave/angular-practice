import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { AppConfig } from './../app.config';

@Injectable()
export class SearchService {

	// TIPS: _headers can't be declared in constructor because Header can't be injected.
	// http://stackoverflow.com/a/36714572
	private _headers: Headers;

	// TIPS: Don't have to use '_' prefix for private variables
	// https://github.com/angular/angular.io/issues/1108
	constructor(private _config: AppConfig, private _http: Http) {
		this._headers = new Headers({
			'Accept': 'application/json',
			'X-Mashape-Key': _config.IGBD_API_KEY
		});
	}

	// TIPS: Observable could be used
	// http://stackoverflow.com/a/37365955
	search(query: string) {
		return this._http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,rating,cover&limit=10&offset=0&search=' + query, { headers: this._headers })
			.toPromise();
	}

	getDetail(id: number) {
		return this._http.get('https://igdbcom-internet-game-database-v1.p.mashape.com/games/' + id + '?fields=name,rating,cover,summary,first_release_date,screenshots', { headers: this._headers })
			.toPromise();
	}
}
