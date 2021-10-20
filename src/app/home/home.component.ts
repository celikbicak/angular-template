import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.addLangs(["tr", "en"]);
    this.translateService.use("tr");
  }

  public changeLanguage(): void {
    this.translateService.use(
      this.translateService.currentLang === "tr" ? "en" : "tr"
    );
  }
}
