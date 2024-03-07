import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Movies } from "../../models/movies";
import { BehaviorSubject, combineLatest, filter, map, Observable, switchMap, tap } from "rxjs";
import { Movie } from "../../models/movie";
import { plainToClass } from "class-transformer";
import { AppHelper } from "../../helpers/app.helper";

/**
 Service responsible for handling movie-related functionality such as getting movies, retrieving a specific movie by ID and
 getting movies by a list of URLs.
 @remarks
 This service relies on an HTTP client to make requests to an external API.
 */
@Injectable({
    providedIn: 'root'
})
export class MovieService {

    /**
     * A behavior subject that holds the current list of movies in the store.
     */
    private moviesStore$ = new BehaviorSubject<Movie[]>([]);
    /**
     * An observable stream that contains the list of all movies available.
     */
    movies$ = this.moviesStore$.asObservable();

    constructor(private http: HttpClient) {
    }

    /**
     * Gets the list of movies from the API if it's not already available in the store.
     * @returns {Observable<Movie[]>} -  An observable stream of the list of movies available.
     */
    getMovies(): Observable<Movie[]> {
        if (this.moviesStore$.value.length) {
            return this.movies$;
        }

        return this.getAllMovies()
    };

    /**
     * Gets a specific movie by its ID.
     * @param {string} id - The ID of the movie to retrieve.
     * @returns {Observable<Movie>} An observable stream of the movie that matches the provided ID.
     */
    getMovieById(id: string): Observable<Movie> {
        return this.getMovies().pipe(
            map((movies) => movies.find((movie) => movie.id == id)),
            filter((result) => !!result),
        );
    }

    /**
     * Gets a list of movies by a list of URLs.
     * @param {string[]} urls - A list of movie URLs to retrieve.
     * @returns {Observable<(Movie)[]>} - An observable stream of the list of movies that match the provided URLs.
     */
    getMoviesByUrl(urls: string[] = []): Observable<(Movie)[]> {
        const ids = urls.map((url) => AppHelper.getIdFromUrl(url));

        return this.getMovies().pipe(
            switchMap(() => combineLatest(ids.map((id) => this.getMovieById(id))))
        );
    }

    /**
     * Gets all movies from the API.
     * @returns {Observable<Movie[]>} - An observable stream of the list of all movies available.
     */
    private getAllMovies(): Observable<Movie[]> {
        return this.http.get<Movies>(`${environment.contentApiUrl}/films`).pipe(
            map((movies) => movies.results),
            map((movies) => movies.map((movie) => plainToClass(Movie, movie))),
            tap((movies) => this.moviesStore$.next(movies))
        );
    }

}
