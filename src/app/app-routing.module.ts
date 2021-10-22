import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    component: HomeComponent,
    path: "",
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
