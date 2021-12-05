import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../../shared/models";
import { UsersService } from "../users.service";

@Component({
  selector: "app-users-edit",
  templateUrl: "./users-edit.component.html",
  styleUrls: ["./users-edit.component.scss"],
})
export class UsersEditComponent implements OnInit {
  public form: FormGroup;
  public user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      if (param.userId) {
        this.getUser(param.userId);
      }
    });
  }

  public cancel(): void {
    void this.router.navigate(["."]).then();
  }

  public save(): void {
    this.usersService.update(this.createUser()).subscribe(
      () => {
        void this.router.navigate(["users/list"]).then();
      },
      () => {
        this.createForm();
      }
    );
  }

  public createUser(form = this.form.value): User {
    return new User(this.user.id, form.name, form.account);
  }

  private getUser(id: string): void {
    this.usersService.get(id).subscribe(
      (user: User) => {
        this.user = user;
        if (user) this.form = this.createForm();
      },
      () => {}
    );
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control(this.user.name),
      account: this.formBuilder.control(this.user.github),
    });
  }
}
