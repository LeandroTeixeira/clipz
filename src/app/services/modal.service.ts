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

  public unregister(id: string) {
    this.modal = this.modal.filter((item: iModal) => item.id !== id);
    console.log(this.modal);
  }

  public getVisible(id: any): boolean {
    const found = this.modal.find((item: iModal) => item.id === id);
    if (found) {
      return found.value;
    }
    return false;
  }

  public toggleVisible(id: any): void {
    const found = this.modal.find((item: iModal) => item.id === id);
    if (found === undefined) {
      throw new Error('ID does not exist');
    }
    found.value = !found.value;
  }
}
