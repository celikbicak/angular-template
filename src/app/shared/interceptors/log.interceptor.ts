import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestLog } from "../models";
import { StorageConstants } from "../constants";
import { storageFunction } from "storage-function";

@Injectable()
export class LogInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const storedLogs: RequestLog[] = JSON.parse(
      storageFunction.fromLocalStorage(StorageConstants.RequestLogKey)
    );
    let requestLogs = [];

    if (storedLogs?.length > 0) {
      requestLogs = [...storedLogs, new RequestLog(new Date(), req)];
    } else {
      requestLogs.push(new RequestLog(new Date(), req));
    }

    storageFunction.toLocalStorage(StorageConstants.RequestLogKey, requestLogs);

    return next.handle(req);
  }
}
