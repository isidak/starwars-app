import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from "../../models/movie";

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListComponent {
    @Input() moviesList: Movie[];
}
