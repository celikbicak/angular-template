import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormattedDatePipe } from "./pipes";
import { MaterialModule } from "./material/material.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [FormattedDatePipe],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    FormsModule,
    FormattedDatePipe,
    ReactiveFormsModule,
  ],
  providers: [FormattedDatePipe],
})
export class SharedModule {}
