import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';

// Define the routes
// const ROUTES = [
//   {
//     path: '',
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    // PostsComponent,
    FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    // RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PostsService], //PostsService, Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
