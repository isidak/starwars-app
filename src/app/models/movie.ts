import { Expose } from "class-transformer";
import { AppHelper } from "../helpers/app.helper";

export class Movie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: [];
    planets: [];
    starships: [];
    vehicles: [];
    species: [];
    created: string;
    edited: string;
    url: string;

    @Expose()
    get id() {
        return AppHelper.getIdFromUrl(this.url, -2);
    }
}
