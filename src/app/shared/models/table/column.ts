export class Column<T> {
  public readonly columnDef: string;
  public readonly key: string;
  public readonly cell: (element: T) => string;

  constructor(columnDef: string, key: string, cell: (element: T) => string) {
    this.columnDef = columnDef;
    this.key = key;
    this.cell = cell;
  }
}
