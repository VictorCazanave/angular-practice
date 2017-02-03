import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Game } from './game'
import { Image } from './image'

@Component({
	selector: 'search-detail',
	templateUrl: './app/search/search-detail.component.html'
})

export class SearchDetailComponent implements OnInit {
	game: Game;

	constructor(private _route: ActivatedRoute) { }

	ngOnInit() {
		let data = this._route.snapshot.data['detail'].json(); // Return an array of object
		this.game = data[0] as Game;
	}
}
