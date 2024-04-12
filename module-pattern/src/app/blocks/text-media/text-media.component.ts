import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'text-media',
  templateUrl: './text-media.component.html',
  styleUrl: './text-media.component.scss'
})
export class TextMediaComponent {
  @Input() block: Block = { type: '', title: '', text: '', media: '', mediaType: '' };
}
