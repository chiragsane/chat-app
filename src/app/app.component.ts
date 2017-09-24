import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  User: User = {
    exists: false,
    name: '',
    id: ''
  };
  ngOnInit(): void {
  }
}
export interface User {
  exists: boolean;
  name: string;
  id: string;
}