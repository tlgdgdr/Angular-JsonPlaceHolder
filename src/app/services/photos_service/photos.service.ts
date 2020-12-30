import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsService } from '../albums_service/albums.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private url ="https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) {

  }

  getPhotos(){
    return this.http.get(this.url);
  }

}
