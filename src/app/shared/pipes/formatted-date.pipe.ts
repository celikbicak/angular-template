import { Pipe, PipeTransform } from "@angular/core";
import { Moment } from "moment";
import * as moment from "moment";

@Pipe({ name: "formattedDate" })
export class FormattedDatePipe implements PipeTransform {
  public transform(
    date: Moment | Date | string | number,
    format: string = "YYYY-MM-DD HH:mm"
  ): string {
    return moment(date).format(format);
  }
}
