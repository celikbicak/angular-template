import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { UsersComponent } from "./users.component";
import { UsersCreateComponent } from "./create/users-create.component";
import { UsersEditComponent } from "./edit/users-edit.component";
import { UsersListComponent } from "./list/users-list.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [
    UsersComponent,
    UsersEditComponent,
    UsersListComponent,
    UsersCreateComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
