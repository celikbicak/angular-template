import { HttpRequest } from '@angular/common/http';

export class RequestLog {
  public readonly requestDate: Date;
  public readonly request: HttpRequest<unknown>;

  constructor(requestDate: Date, request: HttpRequest<unknown>) {
    this.requestDate = requestDate;
    this.request = request;
  }
}
