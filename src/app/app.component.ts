import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First-app';
  order = {
    name: "Samsung Galaxy S22",
    price: 1200,
    guarantee: new Date(2025, 15, 5),
    confirm: ""
  }
  buy(): void {
    this.order.confirm = "The order will be delivered soon";
  }
}
