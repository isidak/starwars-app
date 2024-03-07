import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { Movie } from "../../models/movie";
import { MovieService } from "../../services/movie/movie.service";
import { CharacterService } from "../../services/character/character.service";
import { Character } from "../../models/character";

/**
 A component that displays details of a specific movie and its characters.
 @class
 */
@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {

    /**
     An observable that represents the movie to be displayed.
     @property {Observable<Movie>}
     */
    movie$: Observable<Movie>;

    /**
     An observable that represents the characters that appear in the movie.
     @property {Observable<Character[]>}
     */
    characters$: Observable<Character[]>;

    constructor(private activatedRoute: ActivatedRoute,
                private movieService: MovieService,
                private characterService: CharacterService) {
    }

    ngOnInit() {
        this.movie$ = this.activatedRoute.params.pipe(
            switchMap((params) => this.movieService.getMovieById(params['id'])));

        this.characters$ = this.movie$.pipe(
            switchMap((movie) => this.characterService.getCharactersByUrl(movie.characters)))
    }

}
