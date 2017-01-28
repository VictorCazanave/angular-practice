import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'search', component: SearchComponent },
	{ path: '', redirectTo: 'search', pathMatch: 'full' },
	{ path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }