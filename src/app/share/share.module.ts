import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginateComponent } from './paginate/paginate.component';



@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [PaginateComponent],
  exports: [PaginateComponent]
})
export class ShareModule { }
