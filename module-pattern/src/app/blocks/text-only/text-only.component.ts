import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'block-text-only',
  templateUrl: './text-only.component.html',
  styleUrl: './text-only.component.scss'
})
export class TextOnlyComponent {
  @Input() block: Block = { type: '', title: '', text: '' };
}
