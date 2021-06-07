import { Injectable } from "@angular/core";
import { ImageDetails } from "../models/image-details.model";

@Injectable({ providedIn: 'root' })
export class ImagesService {

  getAllImages() {
    const images: ImageDetails[] = [];
    images.push({ id: 1, title: 'מאוד מאוד יפה', imageUrl: '/assets/images/1.jpg' });
    images.push({ id: 2, title: 'מאוד  יפה', imageUrl: '/assets/images/2.jpg' });
    images.push({ id: 3, title: 'מאוד לא יפה', imageUrl: '/assets/images/3.jpg' });
    images.push({ id: 4, title: 'מאוד חאלס יפה', imageUrl: '/assets/images/4.jpg' });
    return images;
  }


}

export class ImagesServiceMock {

  getAllImages() {
    const images: ImageDetails[] = [];
    images.push({ id: 3, title: 'מאוד לא יפה', imageUrl: '/assets/images/3.jpg' });
    images.push({ id: 2, title: 'מאוד  יפה', imageUrl: '/assets/images/2.jpg' });
    images.push({ id: 4, title: 'מאוד חאלס יפה', imageUrl: '/assets/images/4.jpg' });
    return images;
  }


}


// function test(i: ImagesService) {
// }

// test({ getAllImages: () => [] });


// interface Dog {
//   name: string;
//   id: number;
// }

// interface Person {
//   name: string;
//   id: number;
// }


// function test1(d: Dog) {

// }

// const p: Person = { name: 'Davd', id: 5 };
// test1(p);
