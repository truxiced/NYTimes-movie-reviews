/**
 * Created by egragus on 12/22/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReviewService {

    private baseUrl: string = 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/';

    constructor(private http : Http){

    }
    getMovieReviews() {
      console.log("get")
        return this.http.get(this.baseUrl + "reviews/search.json?api-key=015f41435a7d4d25af4b283647b7079d&offset=0")
                  .toPromise()
                  .then(response => response.json().results)
    }
}
