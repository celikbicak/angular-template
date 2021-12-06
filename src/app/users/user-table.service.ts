import { User } from "../shared/models";
import { Injectable } from "@angular/core";
import { Column, Table } from "../shared/models/table";

@Injectable({ providedIn: "root" })
export class UserTableService {
  private columns: Column<User>[] = [
    new Column("userId", "identifier", (element) => element.id.toString()),
    new Column("name", "name", (element) => element.name),
    new Column("account", "account", (element) => element.github),
  ];

  public getTable(): Table<User> {
    return new Table<User>(this.columns, this.displayedColumns);
  }

  private get displayedColumns(): string[] {
    return this.columns.map((c) => c.columnDef);
  }
}
