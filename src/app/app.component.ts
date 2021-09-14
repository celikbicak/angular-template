import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-template';

  constructor(private httpService: HttpService) {}

  public ngOnInit(): void {
    this.httpService
      .makeGetRequest('http://localhost:3000/users')
      .subscribe((response) => console.log('Get users:', response));

    return;

    setTimeout(() => {
      const newId = Math.floor(Math.random() * 1000);
      const body = {
        id: newId,
        name: `Angular Template DB Test ${newId}`,
        url: 'https://github.com/celikbicak/angular-template',
      };

      this.httpService
        .makePostRequest('http://localhost:3000/projects', JSON.stringify(body))
        .subscribe((response) => console.log('Post request response:', response));
    }, 3000);

    setTimeout(() => {
      this.httpService
        .makeGetRequest('http://localhost:3000/projects')
        .subscribe((response) => console.log('Projects Response:', response));
    }, 5000);
  }
}
