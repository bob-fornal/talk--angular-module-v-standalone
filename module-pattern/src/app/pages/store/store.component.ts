import { Component, OnInit} from '@angular/core';
import { Block, Page } from '../../_core/interfaces/block';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {
  blocks: Array<Block> = [];
  title: string = '';

  constructor(
    private apiService: StoreService,
    private route: ActivatedRoute,
  ) {
    this.apiService.storedata.subscribe(this.handleStoreData.bind(this));
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug: string | null = params.get('store');
      if (slug === null) return;

      this.apiService.getStore(slug);
    });
  }

  handleStoreData = (data: Page): void => {
    this.blocks = data.blocks;
    this.title = data.title;
  };
}
