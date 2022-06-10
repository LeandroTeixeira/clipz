import { Injectable } from '@angular/core';

interface iModal {
  id: string;
  value: boolean;
}

@Injectable()
export default class ModalService {
  private modal: iModal[] = [];

  public register(id: string) {
    const found = this.modal.filter((item: iModal) => item.id === id);
    if (found.length && found.length > 0) {
      throw new Error('ID already registered');
    }
    this.modal.push({
      id,
      value: false,
    });
    console.log(this.modal);
  }

  public getVisible(id: any) {
    console.log(`Get Visible : ${id}`);

    const found = this.modal.filter((item: iModal) => item.id === id);
    if (found[0]) {
      console.log(`Get Visible : ${found[0].id}: ${found[0].value}`);
      return found[0].value;
    }
    return false;
  }

  public toggleVisible(id: any) {
    const index = this.modal.findIndex((item: iModal) => item.id === id);
    if (index === -1) {
      throw new Error('ID does not exist');
    }
    this.modal[index].value = !this.modal[index].value;
    console.log(
      `Toggle Visble: ${this.modal[index].id}${this.modal[index].value}`
    );
    console.log(this.modal);
  }
}
