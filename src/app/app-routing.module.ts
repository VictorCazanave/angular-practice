import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail.component';
import { SearchDetailResolve } from './search-detail.resolve';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'search-detail/:id', component: SearchDetailComponent, resolve: { detail: SearchDetailResolve } },
	{ path: '', redirectTo: 'search', pathMatch: 'full' },
	{ path: '**', redirectTo: 'search', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
