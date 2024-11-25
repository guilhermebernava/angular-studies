import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
})
export class PhotosComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['photos'] &&
      changes['photos'].currentValue !== changes['photos'].previousValue
    ) {
      this.columns = this.generateColumns(this.photos);
    }
  }
  @Input() photos: Photo[] = [];
  columns: any[] = [];

  generateColumns(photos: Photo[]) {
    const columns: any[] = [];

    for (let index = 0; index < photos.length; index += 3) {
      columns.push(photos.slice(index, index + 3));
    }

    return columns;
  }
}
