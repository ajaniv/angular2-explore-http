import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleHTTPComponent } from './simple-http/simple-http.component';
import { MoreHTTPRequestComponent } from './more-http-request/more-http-request.component';
import {
    YouTubeSearchComponent,
    youTubeServiceInjectables
} from './you-tube-search/you-tube-search.component';

import { SearchBoxComponent } from './you-tube-search/search-box/search-box.component';
import { SearchResultComponent } from './you-tube-search/search-result/search-result.component';

/*
 * Injectables
 */

@NgModule( {
    declarations: [
        AppComponent,
        SimpleHTTPComponent,
        MoreHTTPRequestComponent,
        YouTubeSearchComponent,
        SearchBoxComponent,
        SearchResultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        youTubeServiceInjectables
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
