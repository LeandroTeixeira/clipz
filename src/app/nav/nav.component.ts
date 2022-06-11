import { Component, Input } from '@angular/core';
import ModalService from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export default class NavComponent {
  @Input() title: String;

  @Input() id: any;

  constructor(public modal: ModalService) {
    this.title = 'Clips';
  }

  getTitle() {
    return this.title;
  }

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleVisible(this.id);
  }
}
