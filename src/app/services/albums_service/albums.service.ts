import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private url = "https://jsonplaceholder.typicode.com/albums";

  constructor(private http: HttpClient) {

  }
  getAlbums(){
    return this.http.get(this.url);
  }
}
