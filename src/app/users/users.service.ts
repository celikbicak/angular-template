import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpService } from "../shared/services";
import { Observable } from "rxjs";
import { User } from "../shared/models";

@Injectable({ providedIn: "root" })
export class UsersService {
  private readonly usersBaseUrl: string = `${environment.apiBaseUrl}/users`;

  constructor(private httpService: HttpService) {}

  public get(id: string): Observable<User> {
    return this.list().pipe(
      map((res: User[]) => {
        return res.find((user) => user.id === id);
      })
    );
  }

  public list(): Observable<User[]> {
    return this.httpService.makeGetRequest<User[]>(this.usersBaseUrl);
  }

  public add(body: User): Observable<User[]> {
    return this.httpService.makePostRequest(
      this.usersBaseUrl,
      JSON.stringify(body)
    );
  }

  public update(body: User): Observable<User[]> {
    return this.httpService.makePutRequest(
      `${this.usersBaseUrl}/${body.id}`,
      JSON.stringify(body)
    );
  }
}
