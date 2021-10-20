import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { UsersEditComponent } from "./edit/users-edit.component";
import { SharedModule } from "../shared/shared.module";
import { UsersListComponent } from "./list/users-list.component";
import { UsersCreateComponent } from "./create/users-create.component";

@NgModule({
  declarations: [UsersComponent, UsersEditComponent, UsersListComponent, UsersCreateComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
