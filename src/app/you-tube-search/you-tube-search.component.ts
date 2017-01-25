import {
    Component,
    Injectable,
    OnInit,
    ElementRef,
    EventEmitter,
    Inject
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { SearchResult } from './shared/search-result';
import { YouTubeService } from './shared/you-tube-service';
import {YOUTUBE_API_KEY, YOUTUBE_API_URL} from './shared/you-tube-service';
/*
This API key may or may not work for you. Your best bet is to issue your own
API key by following these instructions:
https://developers.google.com/youtube/registering_an_application#Create_API_Keys

Here I've used a **server key** and make sure you enable YouTube.

Note that if you do use this API key, it will only work if the URL in
your browser is "localhost"
*/
//export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
//export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
//let loadingGif: string = ( ( <any>window ).__karma__ ) ? '' : require( 'assets/images/loading.gif' );

export var youTubeServiceInjectables: Array<any> = [
    { provide: YouTubeService, useClass: YouTubeService },
    { provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY },
    { provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL }
];

@Component( {
    selector: 'app-you-tube-search',
    templateUrl: './you-tube-search.component.html',
    styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

    results: SearchResult[];
    loading: boolean;
    loadingGif: string = ( ( <any>window ).__karma__ ) ? '' :  'assets/images/loading.gif' ;

    updateResults( results: SearchResult[] ): void {
        this.results = results;
        console.log("results:", this.results); // uncomment to take a look
        console.log("loading:", this.loading);
    }

    ngOnInit() {
    }

}
