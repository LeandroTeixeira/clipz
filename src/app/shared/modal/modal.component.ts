import { Component, Input, OnInit } from '@angular/core';
import ModalService from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export default class ModalComponent {
  @Input() id: string;

  constructor(public modal: ModalService) {
    this.id = '';
  }

  toggleModal() {
    this.modal.toggleVisible(this.id);
  }
}
