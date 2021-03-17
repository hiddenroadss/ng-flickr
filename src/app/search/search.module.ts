import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';
import { FormComponent } from './form/form.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule} from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchHomeComponent, FormComponent, ImageListComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [SearchHomeComponent]
})
export class SearchModule { }
