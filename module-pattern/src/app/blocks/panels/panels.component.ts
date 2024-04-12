import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'panels',
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss'
})
export class PanelsComponent {
  @Input() block: Block = { type: '', title: '', panels: [] };

  select = (url: string): void => {
    console.log(url);
  };
}
