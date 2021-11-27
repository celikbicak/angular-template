import { Table, TableColumn, User } from "../shared/models";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class UserColumnService {
  private columns: TableColumn<User>[] = [
    new TableColumn("userId", "identifier", (element) => element.id.toString()),
    new TableColumn("name", "name", (element) => element.name),
    new TableColumn("account", "account", (element) => element.github),
  ];

  public getTable(): Table<User> {
    return new Table<User>(this.columns, this.displayedColumns);
  }

  private get displayedColumns(): string[] {
    return this.columns.map((c) => c.columnDef);
  }
}
