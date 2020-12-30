import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../services/photos_service/photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos!:[any];
  constructor(private photosService : PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(response => {
      this.photos= <[any]>response;
    })
  }

}
