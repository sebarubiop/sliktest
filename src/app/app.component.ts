import { Component,ViewContainerRef } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

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

  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal){
    overlay.defaultViewContainer = vcRef;

    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
        var url = JSON.parse(response);
        // console.log(response, url);// the url will be in the response
        
        if(url.error_code == 0){
          this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Resized Images')
          .body(`
              <h4>Image uploaded to Cloudinary</h4>
              <b>See URL's:</b>
              <ul>
                  <li><b><u>300px wide:</u> </b> <a href="`+ url.url300+`" target="_blank">`+ url.url300+`</a></li>
                  <li><b><u>600px wide:</u> </b> <a href="`+ url.url600+`" target="_blank">`+ url.url600+`</a></li>
                  <li><b><u>900px wide:</u> </b> <a href="`+ url.url900+`" target="_blank">`+ url.url900+`</a></li>
              </ul>`)
          .open(); 
        }
        else{
          this.modal.alert()
          .size('lg')
          .showClose(true)
          .title('Resized Images')
          .body(`
              <h4>Image uploaded to Cloudinary</h4>
              <b style="color:red;">Sorry! Errors during uploading process: `+ url.error_desc+`</b>`)
          .open(); 
        }
    };    
    
  }

}
