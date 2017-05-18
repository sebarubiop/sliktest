import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public uploader:FileUploader = new FileUploader({url:'https://slik-test.herokuapp.com/upload'});
  // instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
