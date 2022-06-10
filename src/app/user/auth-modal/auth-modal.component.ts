/* eslint-disable import/prefer-default-export */
import { Component, OnInit, Input } from '@angular/core';
import ModalService from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit {
  ids: string[] = [];

  @Input() mainId: string;

  constructor(public modal: ModalService) {
    this.mainId = '';
    this.ids.push('test');
  }

  ngOnInit(): void {
    this.ids.push(this.mainId);
    this.ids.forEach((id) => this.modal.register(id));
  }
}
