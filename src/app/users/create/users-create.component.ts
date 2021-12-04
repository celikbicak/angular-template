import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../shared/models";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-create",
  templateUrl: "./users-create.component.html",
  styleUrls: ["./users-create.component.scss"],
})
export class UsersCreateComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  public ngOnInit(): void {
    this.form = this.createForm();
  }

  public cancel(): void {
    void this.router.navigate(["."]).then();
  }

  public create(): void {
    this.usersService.add(this.createUser()).subscribe(
      () => {
        void this.router.navigate(["users/list"]).then();
      },
      () => {
        this.createForm();
      }
    );
  }

  public createUser(form = this.form.value): User {
    return new User(form.identifier, form.name, form.account);
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      identifier: this.formBuilder.control(""),
      name: this.formBuilder.control(""),
      account: this.formBuilder.control(""),
    });
  }
}
