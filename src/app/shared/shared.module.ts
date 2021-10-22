import { CommonModule } from "@angular/common";
import { FormattedDatePipe } from "./pipes";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [FormattedDatePipe],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [MaterialModule, FormsModule, FormattedDatePipe],
  providers: [FormattedDatePipe],
})
export class SharedModule {}
