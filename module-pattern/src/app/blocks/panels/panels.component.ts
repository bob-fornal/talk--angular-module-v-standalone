import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';
import { Router } from '@angular/router';

@Component({
  selector: 'block-panels',
  templateUrl: './panels.component.html',
  styleUrl: './panels.component.scss'
})
export class PanelsComponent {
  @Input() block: Block = { type: '', title: '', panels: [] };

  constructor(private router: Router) {}

  select = (url: string): void => {
    this.router.navigateByUrl(url);
  };
}
