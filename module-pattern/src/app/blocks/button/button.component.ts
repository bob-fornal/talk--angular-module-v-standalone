import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'block-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() block: Block = { type: '', title: '', text: '', media: '', mediaType: '' };
}
