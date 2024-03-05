// Import necessary modules and components from Angular core and Angular Material
import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadComponent } from '../../dialog/file-upload/file-upload.component';
import { PictureService } from '../../services/picture.service';

// Component decorator defines metadata for the component
@Component({
  // Selector for the component in HTML markup
  selector: 'app-file-uploader',
  // Indicates that this component should be treated as a standalone Angular element
  standalone: true,
  // Imports necessary Angular Material modules
  imports: [],
  // Path to the template file for the component
  templateUrl: './file-uploader.component.html',
  // Path to the CSS file for the component
  styleUrl: './file-uploader.component.css'
})
// Class declaration for the component
export class FileUploaderComponent {
  // Constructor function, injecting MatDialog and PictureService
  constructor(public dialog: MatDialog, private pictureService: PictureService) { }
  
  // Output property to emit uploaded picture data to parent component
  @Output() pictureUploaded: EventEmitter<File> = new EventEmitter<File>();

  // Method called when a file is selected for upload
  onFileChange(event: any) {
    // Get the selected file from the input element
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const uploadedPicture = inputElement.files[0];

      // Open a dialog for additional input and processing
      this.openDialog(uploadedPicture);
    }
  }

  // Method to open a dialog for additional input and processing
  openDialog(uploadedPicture: File) {
    // Open a MatDialog with FileUploadComponent
    const dialogRef = this.dialog.open(FileUploadComponent, {
      // Set dialog width
      width: '250px',
      // Pass uploaded picture as data to the dialog
      data: { picture: uploadedPicture }
    });

    // Subscribe to dialog close event
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Convert the uploaded file to data URL
        const reader = new FileReader();
        reader.onload = (e: any) => {
          // Extract picture data URL from FileReader result
          const pictureDataUrl = e.target.result;
          // Add the picture data to PictureService along with additional data from dialog result
          this.pictureService.addPicture({ picture: pictureDataUrl, name: result.name, resolution: result.resolution });
        };
        reader.readAsDataURL(uploadedPicture);
      }
    });
  }
}
