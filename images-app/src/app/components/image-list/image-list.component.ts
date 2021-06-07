import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageDetails } from 'src/app/models/image-details.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  @Input() images: ImageDetails[];
  @Input() selectedImage: ImageDetails;

  @Output() imageClicked = new EventEmitter<ImageDetails>();


  constructor() { }

  ngOnInit(): void {
  }

  onImageClick(image: ImageDetails) {
    this.imageClicked.emit(image);
  }

}
