import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError, Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class HttpErrorHandler {
  public handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(`${error.status}: ${error.statusText}`);
  }
}
