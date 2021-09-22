import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "./material/material.module";
import { FormattedDatePipe } from "./pipes";

@NgModule({
    declarations: [
        FormattedDatePipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
    ],
    exports: [
        MaterialModule,
        FormsModule,
        FormattedDatePipe
    ],
    providers: [FormattedDatePipe],
})
export class SharedModule {}
