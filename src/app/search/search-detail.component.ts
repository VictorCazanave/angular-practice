import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'search-detail',
	templateUrl: './app/search/search-detail.component.html'
})

export class SearchDetailComponent implements OnInit {
	game: game;

	constructor(private _route: ActivatedRoute) { }

	ngOnInit() {
		let data = this._route.snapshot.data['detail'].json(); // Return an array of object
		this.game = data[0] as game;
	}
}

interface game {
	id: number;
	name: string;
	rating: number;
	summary: string;
	first_release_date: string;
	cover: image;
	screenshots: image[];
}

interface image {
	url: string;
	width: number;
	height: number;
}
