import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SearchModule } from './search/search.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [BrowserModule, HttpModule, SearchModule, AppRoutingModule],
	declarations: [AppComponent, LoginComponent],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
