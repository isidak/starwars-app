import { Expose } from "class-transformer";
import { AppHelper } from "../helpers/app.helper";

export class Character {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: [];
    vehicles: [];
    starships: [];
    created: string;
    edited: string;
    url: string;

    @Expose()
    get id() {
        return AppHelper.getIdFromUrl(this.url, -2);
    }
}
