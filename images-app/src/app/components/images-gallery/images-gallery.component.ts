import { Component, OnInit } from '@angular/core';
import { ImageDetails } from 'src/app/models/image-details.model';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})
export class ImagesGalleryComponent implements OnInit {

  images: ImageDetails[] = [];
  selectedImage?: ImageDetails;

  constructor(private imageService: ImagesService) {

  }

  ngOnInit(): void {
    this.images = this.imageService.getAllImages();
  }

  setSelectedImage(imageId: number) {
    this.selectedImage = this.images.find(x => x.id === imageId);
  }


  cleareSelectedImage() {
    this.selectedImage = null;
  }

  play() {
    setInterval(() => {
      let currentIndex = this.images.findIndex(x => x.id === this.selectedImage.id);
      currentIndex++;
      if (currentIndex === this.images.length) {
        currentIndex = 0;
      }
      this.selectedImage = this.images[currentIndex];


    }, 1000);
  }

}
