import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, switchMap } from "rxjs";
import { Movie } from "../../models/movie";
import { Character } from "../../models/character";
import { ActivatedRoute } from "@angular/router";
import { MovieService } from "../../services/movie/movie.service";
import { CharacterService } from "../../services/character/character.service";

/**
 A component that displays details of a character and the movies they appeared in.
 @class
 */
@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
    /**
     An observable that represents the current character.
     @property {Observable<Character>}
     */
    character$: Observable<Character>;
    /**
     An observable that represents the movies the current character appeared in.
     @property {Observable<Movie[]>}
     */
    movies$: Observable<Movie[]>;


    constructor(private activatedRoute: ActivatedRoute,
                private movieService: MovieService,
                private characterService: CharacterService) {
    }

    /**
     Initializes the component by setting up the observables.
     @method
     */
    ngOnInit() {
        this.character$ = this.activatedRoute.params.pipe(
            switchMap((params) => {
                return this.characterService.getCharacter(params['id'])
            })
        );

        this.movies$ = this.character$.pipe(
            switchMap((character) => this.movieService.getMoviesByUrl(character.films)))
    }
}
