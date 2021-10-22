import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UsersEditComponent } from "./users-edit.component";

describe("UsersEditComponent", () => {
  let component: UsersEditComponent;
  let fixture: ComponentFixture<UsersEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersEditComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEditComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
