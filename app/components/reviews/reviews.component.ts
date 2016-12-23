/**
 * Created by egragus on 12/22/16.
 */
import {Component} from '@angular/core';
import {ReviewService} from 'app/services/reviewService/reviews.service';

@Component({
    selector: 'reviews',
    templateUrl: 'app/components/reviews/reviews.html',
    providers: [ReviewService],
    styleUrls: ['app/components/reviews/reviews.less']
})
export class ReviewsComponent {

    title = "This is a title";

    reviews;

    constructor(private reviewService: ReviewService){

        //Sets value to list.
        reviewService.getMovieReviews().then(reviews => this.reviews = reviews);
        console.log(this.reviews)
    }

    onScroll() {
    //    this.reviewService.getMovieReviewsTest().then(reviews => this.reviews.push.apply(this.reviews, reviews));
    }

    updateData() {
        console.log("updateData");
        this.reviewService.getMovieReviewsTest().then(reviews => this.reviews.push.apply(this.reviews, reviews));
    }

}
