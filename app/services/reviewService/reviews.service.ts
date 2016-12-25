/**
 * Created by egragus on 12/22/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

export interface criteria {
    searchValue: string;
}
@Injectable()
export class ReviewService {

    private baseUrl: string = 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/';

    private offset: number = 0;

    private responseData;

    private test;

    private searchCriteria: criteria = {
        searchValue: ""
    };

    constructor(private http : Http){

    }

    setSearchCriteria(criteria) {
        this.searchCriteria = criteria;
        this.offset = 0;
    }

    getMovieReviews() {

        this.test = this.http.get(this.baseUrl + "reviews/search.json?api-key=015f41435a7d4d25af4b283647b7079d&offset=" + this.offset + "&query=" + this.searchCriteria.searchValue)
                .toPromise()
            .then(response => this.responseData = response)
            .then(this.extractData);

        return this.test;
    }

    extractData(res: Response) {
        var body = res.json();
        return body.results || [ ];
    }

    getMovieReviewsTest() {

        this.responseData = this.responseData.json()
        if(this.responseData.has_more) {
            this.offset += 20;
            return this.responseData = this.http.get(this.baseUrl + "reviews/search.json?api-key=015f41435a7d4d25af4b283647b7079d&offset=" + this.offset)
                .toPromise()
                .then(response => this.responseData = response)
                .then(response => response.json().results)
        }
    }
}
