import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksHomeComponent } from './bookmarks-home/bookmarks-home.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [BookmarksHomeComponent, BookmarksListComponent],
  imports: [
    CommonModule,
    BookmarksRoutingModule,
    MaterialModule
  ]
})
export class BookmarksModule { }
