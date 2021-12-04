import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpService } from "../shared/services";
import { Observable } from "rxjs";
import { User } from "../shared/models";

@Injectable({ providedIn: "root" })
export class UsersService {
  constructor(private httpService: HttpService) {}

  public list(): Observable<User[]> {
    return this.httpService.makeGetRequest<User[]>(
      `${environment.apiBaseUrl}/users`
    );
  }

  public add(body: User): Observable<User[]> {
    return this.httpService.makePostRequest(
      `${environment.apiBaseUrl}/users`,
      JSON.stringify(body)
    );
  }

  public update(body: User): Observable<User[]> {
    return this.httpService.makePutRequest(
      `${environment.apiBaseUrl}/users`,
      JSON.stringify(body)
    );
  }
}
