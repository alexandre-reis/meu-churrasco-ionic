import { Churrasco } from './models/churrasco';
import { ChurrascoNovo} from './models/churrascoNovo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
   providedIn: 'root'
})
export class ApiService {

   base_path = 'http://localhost:3333/';

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

   save(churrasco: ChurrascoNovo) {
		this.http.post(`${this.base_path}`, churrasco)
			.subscribe(data => {

			}, error => {
				console.log(error);
			});
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
