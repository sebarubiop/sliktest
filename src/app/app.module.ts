import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { FileUploadSectionComponent } from './components/file-upload-section';
// import { SimpleDemoComponent } from './components/file-upload/simple-demo';


// , FileUploadSectionComponent, SimpleDemoComponent
// ,HttpModule
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, CommonModule, FileUploadModule,ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [], //PostsService, Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }
