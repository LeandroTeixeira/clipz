/* eslint-disable object-curly-newline */
/* eslint-disable import/prefer-default-export */
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import ModalService from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  ids: string[] = [];

  @Input() mainId: string;

  constructor(public modal: ModalService) {
    this.mainId = 'id';
  }

  ngOnInit(): void {
    this.ids.push(this.mainId);
    this.ids.forEach((id) => this.modal.register(id));
  }

  ngOnDestroy(): void {
    this.ids.forEach((id) => this.modal.unregister(id));
  }
}
