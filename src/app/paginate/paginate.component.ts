import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Page } from '../page'

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  @Input() maxPages: number;
  @Input() current: number;
  @Input() postsPerPage: number[];
  @Input() itemsPerPage: number;

  @Output() changePage = new EventEmitter();
  
  pages: any[] = [];
  pageModel: Page = {
    page: this.current,
    itemsPerPage: this.itemsPerPage
  };
  constructor() { }

  ngOnInit() {
    if (this.maxPages) {
      console.log('MaxPage : ',this.maxPages)
      this.createPages();
    }
  }
  setPage(page: number, perPage: number) {
    this.pageModel.page = page;
    this.pageModel.itemsPerPage = perPage;
    this.changePage.emit(this.pageModel);
  }

  createPages() {
    for(let i=1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }
  }
  


