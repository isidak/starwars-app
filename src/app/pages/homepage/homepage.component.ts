import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieService } from "../../services/movie/movie.service";
import { Observable } from "rxjs";
import { Movie } from "../../models/movie";

/**
 A component that displays the homepage of the application.
 @class
 */
@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
    /**
     An observable that represents the list of movies to be displayed on the homepage.
     @property {Observable<Movie[]>}
     */
    moviesList$: Observable<Movie[]>;

    constructor(private movieService: MovieService) {
    }

    ngOnInit() {
        this.moviesList$ = this.movieService.getMovies()
    }

}
