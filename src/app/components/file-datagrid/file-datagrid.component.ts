// Import necessary modules and components from Angular core and Angular Material
import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { PictureService } from '../../services/picture.service';
import { ShowPictureComponent } from '../../dialog/show-picture/show-picture.component';
import { MatDialog } from '@angular/material/dialog';

// Component decorator defines metadata for the component
@Component({
  // Selector for the component in HTML markup
  selector: 'app-file-datagrid',
  // Indicates that this component should be treated as a standalone Angular element
  standalone: true,
  // Imports necessary Angular Material modules
  imports: [MatTableModule],
  // Path to the template file for the component
  templateUrl: './file-datagrid.component.html',
  // Path to the CSS file for the component
  styleUrl: './file-datagrid.component.css'
})
// Class declaration for the component implementing OnInit interface
export class FileDatagridComponent implements OnInit {

  // Constructor function, injecting PictureService and MatDialog
  constructor(private pictureService: PictureService, private dialog: MatDialog) {}

  // Input property to receive uploaded picture data from parent component
  @Input() uploadedPicture: File | null = null;

  // Array to hold picture data retrieved from the PictureService
  pictures: any[] = [];

  // Lifecycle hook called after Angular initializes the component
  ngOnInit(): void {
    // Subscribe to the PictureService to get all pictures
    this.pictureService.getAllPictures().subscribe(pictures => {
      // Assign retrieved pictures to the component property
      this.pictures = pictures;
    });
  }

  // Method to open a dialog displaying the clicked image
  openPictureDialog(imageUrl: string): void  {
    // Open a MatDialog with ShowPictureComponent to display the image
    this.dialog.open(ShowPictureComponent, {
      // Set width and height of the dialog
      width: '70%',
      height: '70%',
      // Pass the image URL as data to the dialog
      data: {imageUrl}
    });
  }
}
