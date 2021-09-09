import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IHttpService {
  makeGetRequest<T>(url: string): Observable<T>;

  makePostRequest<T>(url: string, body: any): Observable<T>;

  makePutRequest<T>(url: string, body: any): Observable<T>;

  makeDeleteRequest<T>(url: string, body?: any): Observable<T>;

  makePatchRequest<T>(url: string, body?: any): Observable<T>;
}

@Injectable({ providedIn: 'root' })
export class HttpService implements IHttpService {
  constructor(private http: HttpClient) {}

  public makeGetRequest<T>(url: string): Observable<T> {
    return this.http
      .get<T>(url, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          if (res.status === 200) {
            return res.body;
          } else {
            return null;
          }
        })
      );
  }

  public makePostRequest<T>(url: string, body: any): Observable<T> {
    return this.http
      .post<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          if (res.status === 200) {
            return res.body;
          } else {
            return null;
          }
        })
      );
  }

  public makePutRequest<T>(url: string, body: any): Observable<T> {
    return this.http
      .put<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          if (res.status === 200) {
            return res.body;
          } else {
            return null;
          }
        })
      );
  }

  public makeDeleteRequest<T>(url: string, body?: any): Observable<T> {
    return this.http
      .request<T>('delete', url, {
        body,
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          if (res.status === 200) {
            return res.body;
          } else {
            return null;
          }
        })
      );
  }

  public makePatchRequest<T>(url: string, body?: any): Observable<T> {
    return this.http
      .patch<T>(url, body, {
        headers: this.createHttpHeaders(),
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<T>) => {
          if (res.status === 200) {
            return res.body;
          } else {
            return null;
          }
        })
      );
  }

  private createHttpHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }
}
