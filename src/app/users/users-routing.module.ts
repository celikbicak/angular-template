import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UsersCreateComponent } from "./create/users-create.component";
import { UsersEditComponent } from "./edit/users-edit.component";
import { UsersListComponent } from "./list/users-list.component";

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
    children: [
      {
        path: "list",
        component: UsersListComponent,
      },
      {
        path: "create",
        component: UsersCreateComponent,
      },
      {
        path: "edit/:userId",
        component: UsersEditComponent,
      },
      {
        path: "",
        redirectTo: "list",
        pathMatch: "full",
      },
      {
        path: "**",
        redirectTo: "list",
        pathMatch: "full",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
