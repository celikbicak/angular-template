import { Observable, throwError } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class HttpErrorHandler {
  public handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(`${error.status}: ${error.statusText}`);
  }
}
