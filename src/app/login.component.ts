import { Component } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './app/login.component.html'
})

export class LoginComponent {
	name: string;
	email: string;
	password: string;

	constructor() {
	}

}
