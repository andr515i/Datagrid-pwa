import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../../dialog/file-upload/file-upload.component';
import { PictureService } from '../../services/picture.service';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [],
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.css'
})
export class FileUploaderComponent {
  constructor(public dialog: MatDialog, private pictureService: PictureService) { }
  @Output() pictureUploaded: EventEmitter<File> = new EventEmitter<File>();

  onFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const uploadedPicture = inputElement.files[0];



      this.openDialog(uploadedPicture);
    }
  }

  openDialog(uploadedPicture: File) {
    const dialogRef = this.dialog.open(FileUploadComponent, {
      width: '250px',
      data: { picture: uploadedPicture }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Here you can do something with the result (e.g., save it)
        console.log(result);
        // Convert the file to data URL
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const pictureDataUrl = e.target.result;
          this.pictureService.addPicture({ picture: pictureDataUrl, name: result.name, resolution: result.resolution });
        };
        reader.readAsDataURL(uploadedPicture);
      }
    });
  }

}
