import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentsService } from '../services/comments_service/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments!:[any];

  constructor(private commentsService : CommentsService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(response=>{
      this.comments = <[any]>response;
    })
  }

  open(content:any){
    this.modalService.open(content, {scrollable:true});

  }

}
