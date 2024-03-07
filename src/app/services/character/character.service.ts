import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { combineLatest, map, Observable, tap } from "rxjs";
import { environment } from "../../../environments/environment";
import { createStore } from "@ngneat/elf";
import { hasEntity, selectEntity, upsertEntities, withEntities } from "@ngneat/elf-entities";
import { Character } from "../../models/character";
import { plainToClass } from "class-transformer";
import { AppHelper } from "../../helpers/app.helper";

/**
 Provides methods to interact with the characters of the Star Wars universe.
 */
@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    /**
     A store to cache characters.
     */
    private characterStore = createStore({name: 'characters'}, withEntities<Character>());

    constructor(private http: HttpClient) {
    }

    /**
     Retrieves characters using their URLs.
     @param {string[]} urls - The URLs of the characters to retrieve.
     @returns {Observable<Character[]>} - An observable of an array of characters.
     */
    getCharactersByUrl(urls: string[] = []): Observable<Character[]> {
        const ids = urls.map((url) => AppHelper.getIdFromUrl(url));
        return combineLatest(ids.map((id) => this.getCharacter(id)));
    }

    /**
     Retrieves a character using their ID.
     @param {string} id - The ID of the character to retrieve.
     @returns {Observable<Character>} An observable of the character.
     */
    getCharacter(id: string): Observable<Character> {
        if (this.characterStore.query(hasEntity(id))) {
            return this.getCharacterFromStoreById(id);
        }

        return this.http.get<Character>(`${environment.contentApiUrl}/people/${id}`).pipe(
            map((character) => plainToClass(Character, character)),
            tap((character) => this.characterStore.update(upsertEntities(character)))
        );
    }


    /**
     Retrieves a character from the store using their ID.
     @param {string} id - The ID of the character to retrieve.
     @returns {Observable<Character>} - An observable of the character.
     */
    private getCharacterFromStoreById(id: string): Observable<Character> {
        return this.characterStore.pipe(selectEntity(id));
    }
}
