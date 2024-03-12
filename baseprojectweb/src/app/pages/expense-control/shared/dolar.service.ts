import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Dolar } from './dolar.model';

@Injectable({
  providedIn: 'root',
})
export class DolarService {
  http: HttpClient;

  constructor(private injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  getActualDolar(): Observable<Dolar> {
    return this.http
      .get<any>(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
      .pipe(catchError(this.handleError));
  }

  protected handleError(error: any): Observable<any> {
    console.log('ERRO NA REQUISIÇÃO => ', error);
    return throwError(error);
  }
}
