import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { UsersCreateComponent } from "./users-create.component";

describe("UsersCreateComponent", () => {
  let component: UsersCreateComponent;
  let fixture: ComponentFixture<UsersCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersCreateComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersCreateComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
