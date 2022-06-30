/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import {
  Component,
  AfterContentInit,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  // eslint-disable-next-line operator-linebreak
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach((t) => {
      t.active = false;
    });
    tab.active = true;
    return false;
  }
}
