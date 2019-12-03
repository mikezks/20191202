import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starter';
  name = 'Michael';
  valid = true;

  showMsg(): void {
    alert('My Info!');
  }
}
