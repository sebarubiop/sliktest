import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FileUploadSectionComponent } from './components/file-upload-section';
import { SimpleDemoComponent } from './components/file-upload/simple-demo';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './posts.service';

// // Define the routes
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
    AppComponent, FileUploadSectionComponent, SimpleDemoComponent
  ],
  imports: [
    BrowserModule, CommonModule, FileUploadModule, TabsModule.forRoot(), FormsModule,HttpModule
  ],
  providers: [PostsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
