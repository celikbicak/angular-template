import { Component, OnInit } from "@angular/core";
import { Table, User } from "../../shared/models";
import { UserColumnService } from "../user-column.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  public table: Table<User>;

  constructor(
    columnService: UserColumnService,
    private usersService: UsersService
  ) {
    this.table = columnService.getTable();
  }

  public ngOnInit(): void {
    this.populateList();
  }

  private populateList(): void {
    this.usersService.list().subscribe((response) => {
      this.table.setDatasource(response);
    });
  }
}
