import { Component, Input } from '@angular/core';
import { TypeColor } from 'src/app/models/TypeColor';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() type: string = '';
  @Input() label: string = '';
  TypeColor: any = TypeColor;
}
