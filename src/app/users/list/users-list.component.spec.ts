import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { UsersListComponent } from "./users-list.component";

describe("UsersListComponent", () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
