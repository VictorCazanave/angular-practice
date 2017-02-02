import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail.component';
import { SearchDetailResolve } from './search-detail.resolve';

const routes: Routes = [
	{ path: 'search', component: SearchComponent },
	{ path: 'search-detail/:id', component: SearchDetailComponent, resolve: { detail: SearchDetailResolve } }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class SearchRoutingModule { }
