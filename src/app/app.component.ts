import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './custom.css'],
})
export default class AppComponent {
  title = 'Clipz';

  authID = 'auth';

  getTitle() {
    return this.title;
  }
}
