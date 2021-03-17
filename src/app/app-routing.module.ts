import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchHomeComponent } from './search/search-home/search-home.component';


const routes: Routes = [ 
  {path: 'bookmarks', loadChildren: () => import('./bookmarks/bookmarks.module').then(m => m.BookmarksModule)},
  { path: '', component: SearchHomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
