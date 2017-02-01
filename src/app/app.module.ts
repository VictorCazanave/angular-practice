import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail.component';
import { RatingPipe } from './rating.pipe';

import { AppConfig } from './app.config'
import { SearchService } from './search.service'
import { SearchDetailResolve } from './search-detail.resolve';

@NgModule({
	imports: [BrowserModule, HttpModule, AppRoutingModule],
	declarations: [AppComponent, LoginComponent, SearchComponent, SearchDetailComponent, RatingPipe],
	providers: [AppConfig, SearchService, SearchDetailResolve],
	bootstrap: [AppComponent]
})

export class AppModule { }
