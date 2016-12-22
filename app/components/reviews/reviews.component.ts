/**
 * Created by egragus on 12/22/16.
 */
import {Component} from '@angular/core';
import {ReviewService} from 'app/services/reviewService/reviews.service';

@Component({
    selector: 'reviews',
    templateUrl: 'app/components/reviews/reviews.html',
    providers: [ReviewService]
})
export class ReviewsComponent {

    title = "This is a title";

    reviews;

    constructor(reviewService: ReviewService){

        //Sets value to list.
        reviewService.getMovieReviews().then(reviews => this.reviews = reviews);
    }
}
