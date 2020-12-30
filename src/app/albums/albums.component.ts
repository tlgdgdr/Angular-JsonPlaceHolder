import { Component, OnInit } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { AlbumsService } from '../services/albums_service/albums.service';
import { CommentsService } from '../services/comments_service/comments.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!: [any];
  selected!: AlbumsComponent;
  comments!: CommentsComponent;

  constructor(private albumService: AlbumsService, private comment:CommentsService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe(response => {
      this.albums = <[any]>response;
    })
  }

}
