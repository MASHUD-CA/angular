import { Component } from '@angular/core';

//Component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
//Logic part
export class AppComponent {
  title = 'angular';
}
