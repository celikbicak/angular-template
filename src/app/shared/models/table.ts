import { MatTableDataSource } from "@angular/material/table";
import { TableColumn } from "./table-column";

export class Table<T> {
  public readonly columns: TableColumn<T>[];
  public readonly displayedColumns: string[];
  public dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);

  constructor(
    columns: TableColumn<T>[],
    displayedColumns: string[],
    dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([])
  ) {
    this.columns = columns;
    this.displayedColumns = displayedColumns;
    this.dataSource = dataSource;
  }

  public setDatasource(data: T[]): void {
    this.dataSource.data = data;
  }
}
