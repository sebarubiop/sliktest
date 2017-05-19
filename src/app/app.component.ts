import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = '/api/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  // console.log('uploader',this.uploader);
  
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }

  constructor(){
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        var responsePath = JSON.parse(response);
        console.log(response, responsePath);// the url will be in the response         
    };
  }
}
