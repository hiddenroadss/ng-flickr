import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BookmarksHomeComponent } from './bookmarks-home/bookmarks-home.component';

const routes: Routes = [
  {path: '', component: BookmarksHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
