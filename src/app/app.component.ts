import { Component, OnInit, ViewChild } from "@angular/core";
import { HttpService } from "./shared/services";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("sidenav") public sidenav: MatSidenav;

  constructor(
    private httpService: HttpService,
    private translateService: TranslateService,
    public router: Router
  ) {
    this.translateService.addLangs(["tr", "en"]);
    this.translateService.use("tr");
  }

  public navigateToRoute(route: string): void {
    void this.router.navigate([route]);
    void this.sidenav.close();
  }

  public toggleSidenav(): void {
    void this.sidenav.toggle();
  }

  public ngOnInit(): void {
    this.httpService
      .makeGetRequest(`${environment.apiBaseUrl}/users`)
      .subscribe((response) => console.log("Get users:", response));

    return;

    setTimeout(() => {
      const newId = Math.floor(Math.random() * 1000);
      const body = {
        id: newId,
        name: `Angular Template DB Test ${newId}`,
        url: "https://github.com/celikbicak/angular-template",
      };

      this.httpService
        .makePostRequest(
          `${environment.apiBaseUrl}/projects`,
          JSON.stringify(body)
        )
        .subscribe((response) =>
          console.log("Post request response:", response)
        );
    }, 3000);

    setTimeout(() => {
      this.httpService
        .makeGetRequest(`${environment.apiBaseUrl}/projects`)
        .subscribe((response) => console.log("Projects Response:", response));
    }, 5000);
  }

  public changeLanguage(): void {
    this.translateService.use(
      this.translateService.currentLang === "tr" ? "en" : "tr"
    );
  }
}
