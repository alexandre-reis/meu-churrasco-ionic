import { Churrasco } from './models/churrasco';
import { ChurrascoNovo} from './models/churrascoNovo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class ApiService {

   base_path = 'http://localhost:3333/churrascos';
   path_churrasco = 'http://localhost:3333/churrascoNovo';

   constructor(private http: HttpClient) { }

   httpOptions = {
      headers: new HttpHeaders({
         'Content-Type': 'application/json'
      })
   }

   handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         console.error('An error occurred:', error.error.message);
      } else {
         console.error( 
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
      }
      return throwError('Something bad happened; please try again later.');
   };

   save(); Observable<ChurrascoNovo> {
      return this.http
               .post<ChurrascoNovo>(this.path_churrasco)
               .pipe(
                  retry(2),
                  catchError(this.handleError)
               );
   }

   getList(): Observable<Churrasco> {
      return this.http
         .get<Churrasco>(this.base_path)
         .pipe(
            retry(2),
            catchError(this.handleError)
         );
   }
}
