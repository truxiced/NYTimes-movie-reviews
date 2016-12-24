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
var reviews_service_1 = require('app/services/reviewService/reviews.service');
var ReviewsComponent = (function () {
    function ReviewsComponent(reviewService) {
        var _this = this;
        this.reviewService = reviewService;
        this.title = "This is a title";
        //Sets value to list.
        reviewService.getMovieReviews().then(function (reviews) { return _this.reviews = reviews; });
        console.log(this.reviews);
    }
    ReviewsComponent.prototype.onScroll = function () {
        //    this.reviewService.getMovieReviewsTest().then(reviews => this.reviews.push.apply(this.reviews, reviews));
    };
    ReviewsComponent.prototype.updateData = function () {
        var _this = this;
        console.log("updateData");
        this.reviewService.getMovieReviewsTest().then(function (reviews) { return _this.reviews.push.apply(_this.reviews, reviews); });
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'reviews',
            templateUrl: './reviews.html',
            providers: [reviews_service_1.ReviewService],
            styleUrls: ['./reviews.less']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof reviews_service_1.ReviewService !== 'undefined' && reviews_service_1.ReviewService) === 'function' && _a) || Object])
    ], ReviewsComponent);
    return ReviewsComponent;
    var _a;
}());
exports.ReviewsComponent = ReviewsComponent;
//# sourceMappingURL=reviews.component.js.map