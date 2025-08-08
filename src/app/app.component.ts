import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = `Despliegue Angular en Cloud Panel`;
  url : string = 'http://localhost:6500/security/token/'
  tokenTest: any = { token: '' };
  constructor(private _httpClient: HttpClient) {
    _httpClient
      .post(this.url, {
        email: 'admin@shiffer.com',
        password: 'Admin581@',
      })
      .subscribe(
        (data  => {
          this.tokenTest = data;
        })
      );
  }
}
