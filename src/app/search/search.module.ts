import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppConfig } from './../app.config'
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail.component';
import { SearchService } from './search.service'
import { SearchDetailResolve } from './search-detail.resolve';
import { RatingPipe } from './rating.pipe';

import { SearchRoutingModule } from './search-routing.module';

@NgModule({
	imports: [CommonModule, HttpModule, SearchRoutingModule],
	declarations: [SearchComponent, SearchDetailComponent, RatingPipe],
	exports: [SearchComponent, SearchDetailComponent],
	providers: [AppConfig, SearchService, SearchDetailResolve]
})

export class SearchModule { }
