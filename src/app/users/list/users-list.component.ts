import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/models";
import { Table } from "../../shared/models/table";
import { UserTableService } from "../user-table.service";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"],
})
export class UsersListComponent implements OnInit {
  public table: Table<User>;

  constructor(
    userTableService: UserTableService,
    private usersService: UsersService
  ) {
    this.table = userTableService.getTable();
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
