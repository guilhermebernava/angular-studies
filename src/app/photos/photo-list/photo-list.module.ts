import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
``;
import { FilterByDescription } from './filter-by-description.pipe';
import { PhotoComponent } from './photo/photo.component';
import { CommonModule } from '@angular/common';
import { CardModule } from '../../commons/cards/card.module';
import { SearchFilterModule } from '../../commons/search-filter/search-filter.module';
import { DarkenOnHoverModule } from '../../commons/directives/dark-on-hover/dark-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
  ],
  imports: [CommonModule, CardModule, SearchFilterModule, DarkenOnHoverModule],
  exports: [FilterByDescription],
})
export class PhotoListModule {}
