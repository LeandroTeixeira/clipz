import { Component, OnInit } from '@angular/core';
import ModalService from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export default class ModalComponent {
  constructor(public modal: ModalService) {
    console.log(this.modal.getVisible());
  }

  toggleModal() {
    this.modal.toggleVisible();
  }
}
