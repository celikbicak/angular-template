import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { User } from "../../shared/models";

@Component({
  selector: "app-users-edit",
  templateUrl: "./users-edit.component.html",
  styleUrls: ["./users-edit.component.scss"],
})
export class UsersEditComponent implements OnInit {
  public form: FormGroup;
  public user: User;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control(""),
      account: this.formBuilder.control(""),
    });
  }
}
