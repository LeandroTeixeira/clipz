import { Injectable } from '@angular/core';

@Injectable()
export default class ModalService {
  private visible = false;

  public getVisible() {
    return this.visible;
  }

  public toggleVisible() {
    this.visible = !this.visible;
  }
}
