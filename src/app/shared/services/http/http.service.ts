import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpErrorHandler } from '../http-error-handler/http-error-handler.service';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private http: HttpClient, private httpErrorHandler: HttpErrorHandler) {}

  public makeGetRequest<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      )
      .pipe(catchError((error) => this.httpErrorHandler.handleError(error)));
  }

  public makePostRequest<T>(url: string, body: unknown): Observable<T> {
    return this.http
      .post<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      )
      .pipe(catchError((error) => this.httpErrorHandler.handleError(error)));
  }

  public makePutRequest<T>(url: string, body: unknown): Observable<T> {
    return this.http
      .put<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      )
      .pipe(catchError((error) => this.httpErrorHandler.handleError(error)));
  }

  public makeDeleteRequest<T>(url: string, body?: unknown): Observable<T> {
    return this.http
      .request<T>('delete', url, {
        body,
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      )
      .pipe(catchError((error) => this.httpErrorHandler.handleError(error)));
  }

  public makePatchRequest<T>(url: string, body?: unknown): Observable<T> {
    return this.http
      .patch<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          return res.body;
        })
      )
      .pipe(catchError((error) => this.httpErrorHandler.handleError(error)));
  }

  private createHttpHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }
}
