import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() selectedTab: boolean = false;
  @Output() selectTab = new EventEmitter<boolean>;

}
