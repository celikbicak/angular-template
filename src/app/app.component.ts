import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  @ViewChild("sidenav") public sidenav: MatSidenav;

  constructor(
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

  public changeLang(lang: string): void {
    this.translateService.use(lang);
  }
}
