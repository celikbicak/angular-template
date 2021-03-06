import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";
import { HttpLoaderFactory } from "./shared/factories";
import { LogInterceptor } from "./shared/interceptors";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: "tr",
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
