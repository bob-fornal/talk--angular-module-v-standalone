import { Component, Input } from '@angular/core';
import { Block } from '../../_core/interfaces/block';

@Component({
  selector: 'block-media-only',
  templateUrl: './media-only.component.html',
  styleUrl: './media-only.component.scss'
})
export class MediaOnlyComponent {
  @Input() block: Block = { type: '', title: '', text: '', media: '', mediaType: '' };

  mediaType = (): string | undefined => {
    return this.block.mediaType;
  };
}
