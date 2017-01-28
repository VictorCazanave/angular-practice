import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { SearchComponent } from './search.component';

@NgModule({
	imports: [BrowserModule, HttpModule, AppRoutingModule],
	declarations: [AppComponent, LoginComponent, SearchComponent],
	bootstrap: [AppComponent]
})

export class AppModule { }
