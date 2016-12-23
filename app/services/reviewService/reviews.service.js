"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by egragus on 12/22/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ReviewService = (function () {
    function ReviewService(http) {
        this.http = http;
        this.baseUrl = 'http://developer.nytimes.com/proxy/https/api.nytimes.com/svc/movies/v2/';
        this.offset = 0;
    }
    ReviewService.prototype.getMovieReviews = function () {
        var _this = this;
        this.test = this.http.get(this.baseUrl + "reviews/search.json?api-key=015f41435a7d4d25af4b283647b7079d&offset=" + this.offset)
            .toPromise()
            .then(function (response) { return _this.responseData = response; })
            .then(this.extractData);
        //  .then(response => response.json().results);
        //console.log(this.test)
        //   console.log(this.responseData.has_more);
        return this.test;
    };
    ReviewService.prototype.extractData = function (res) {
        var body = res.json();
        //  res => this.responseData = res;
        //  console.log(this.responseData)
        return body.results || [];
    };
    ReviewService.prototype.getMovieReviewsTest = function () {
        var _this = this;
        this.responseData = this.responseData.json();
        console.log(this.responseData);
        if (this.responseData.has_more) {
            this.offset += 20;
            return this.responseData = this.http.get(this.baseUrl + "reviews/search.json?api-key=015f41435a7d4d25af4b283647b7079d&offset=" + this.offset)
                .toPromise()
                .then(function (response) { return _this.responseData = response; })
                .then(function (response) { return response.json().results; });
        }
    };
    ReviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ReviewService);
    return ReviewService;
}());
exports.ReviewService = ReviewService;
//# sourceMappingURL=reviews.service.js.map