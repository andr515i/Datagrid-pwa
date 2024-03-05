import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FileDatagridComponent } from "./components/file-datagrid/file-datagrid.component";
import { FileUploaderComponent } from "./components/file-uploader/file-uploader.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FileDatagridComponent, FileUploaderComponent]
})
export class AppComponent {
  title = 'FirstPWA';
  uploadedPicture: File | null = null;

  onPictureUploaded(picture: File) {
    this.uploadedPicture = picture;
  }
}
