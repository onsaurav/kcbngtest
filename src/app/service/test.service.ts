import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private http: HttpClient) {
    //initialization
  }

  getApiResult():Observable<any>{
    let publicUrl: string = "https://api.publicapis.org/entries";

    return this.http.get<any>(publicUrl).pipe(
      tap(data =>  console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errMessage: string = err.error.message;
    console.log(errMessage);
    return throwError(()=>errMessage);
  }

  

}
