import { Component, OnInit } from "@angular/core";
import { Table, User } from "../../shared/models";
import { HttpService } from "../../shared/services";
import { UserColumnService } from "../user-column.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  public table: Table<User>;

  constructor(
    columnService: UserColumnService,
    private httpService: HttpService
  ) {
    this.table = columnService.getTable();
  }

  public ngOnInit(): void {
    this.populateList();
  }

  private populateList(): void {
    this.httpService
      .makeGetRequest<User[]>(`${environment.apiBaseUrl}/users`)
      .subscribe((response) => {
        this.table.setDatasource(response);
      });
  }
}
