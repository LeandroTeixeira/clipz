import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export default class NavComponent implements OnInit {
  @Input() title: String;

  constructor() {
    this.title = 'Clips';
  }

  ngOnInit(): void {}

  getTitle() {
    return this.title;
  }
}
