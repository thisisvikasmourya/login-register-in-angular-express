import { Component } from '@angular/core';
import {AuthService} from './auth.service';
// import {MatSidenav} from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'abs-store';

  constructor(private _authService: AuthService){ }
}
