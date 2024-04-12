import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss'
})
export class DynamicPageComponent {
  @Input() blocks: Array<Block> = [];
}
