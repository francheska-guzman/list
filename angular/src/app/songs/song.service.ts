import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ISong } from './song'; // Data type.

@Injectable()
export class SongService {
    private _songUrl = './assets/api/songs.json';

    constructor(private _http: HttpClient) { }

    getSongs(): Observable<ISong[]> {
        return this._http.get<ISong[]>(this._songUrl)
            .do(data => console.log('Data: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSong(id: number): Observable<ISong> {
        return this.getSongs()
            .map((songs: ISong[]) => songs.find(s => s.songId === id));
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
            if (err.error instanceof Error) {
                // A client-side or network error occurred.
                errorMessage = `An error occurred: ${err.error.message}`;
            } else {
                // The back-end returned an unsuccessful response code.
                errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            }
            console.log(err.message);
            return Observable.throw(err.message);
    }
}
