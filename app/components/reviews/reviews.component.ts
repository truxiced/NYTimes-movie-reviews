import {Component} from "@angular/core";
import {ReviewService} from "app/services/reviewService/reviews.service";
import {ListItem} from "app/components/listItem/listItem.component";

@Component({
    moduleId: module.id,
    selector: 'reviews',
    templateUrl: './reviews.html',
    providers: [ReviewService],
    styleUrls: ['./reviews.less']
})
export class ReviewsComponent {

    title = 'Movie reviews from New York Times';

    reviews:Array<ListItem>;

    constructor(private reviewService: ReviewService){
        reviewService.getMovieReviews().then(reviews => this.reviews = reviews);
    }


    updateData() {
        this.reviewService.getNextMovieReviews().then(reviews => this.reviews.push.apply(this.reviews, reviews));
    }

    setCriteria($event) {
        this.reviewService.setSearchCriteria($event);
        this.reviewService.getMovieReviews().then(reviews => this.reviews = reviews);
    }
}
