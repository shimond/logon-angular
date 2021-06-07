import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';
import { ImageListComponent } from './components/image-list/image-list.component';
// import { ImagesService, ImagesServiceMock } from './services/images.service';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGalleryComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    //  { provide: ImagesService, useClass: ImagesServiceMock }
    // ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
