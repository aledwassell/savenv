import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Data} from "../_interfaces/data";
import {Observable, of} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class ServerConnectorService {
    url: string;

    constructor(private http: HttpClient) {
        this.url = 'http://localhost:4000/data';
    }

    getData(): Observable<Data[]> {
        return this.http.get<Data[]>(this.url)
            .pipe(
                tap(d => console.log('got data')),
                catchError(this.handleError<any>('getting data'))
            )
    }

    sendData(d: Data): Observable<Data> {
        return this.http.post<Data>(this.url, d, httpOptions)
            .pipe(
                tap(_ => console.log(`Data sent`)),
                catchError(this.handleError<any>('Adding Data'))
            )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
