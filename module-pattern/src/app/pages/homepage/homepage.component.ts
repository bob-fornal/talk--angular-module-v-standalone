import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { Block, Page } from '../../_core/interfaces/block';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  blocks: Array<Block> = [];
  title: string = '';

  constructor(private apiService: HomepageService) {
    this.apiService.pagedata.subscribe(this.handlePageData.bind(this));
  }

  ngOnInit() {
    this.apiService.getPageData();
  }

  handlePageData = (data: Page): void => {
    this.title = data.title;
    this.blocks = data.blocks;
  };
}
