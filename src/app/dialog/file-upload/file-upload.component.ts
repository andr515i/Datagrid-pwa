// Import necessary modules and components from Angular core and Angular Material
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Component decorator defines metadata for the component
@Component({
  // Selector for the component in HTML markup
  selector: 'app-file-upload',
  // Indicates that this component should be treated as a standalone Angular element
  standalone: true,
  // Imports necessary Angular Material modules
  imports: [MatFormFieldModule, FormsModule, MatDialogModule, MatInputModule, ReactiveFormsModule],
  // Path to the template file for the component
  templateUrl: './file-upload.component.html',
  // Path to the CSS file for the component
  styleUrl: './file-upload.component.css'
})
// Class declaration for the component
export class FileUploadComponent {
  // FormGroup to manage form controls
  upload!: FormGroup;

  // Constructor function, injecting MatDialogRef, MAT_DIALOG_DATA, and FormBuilder
  constructor(public dialogRef: MatDialogRef<FileUploadComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) {
    // Initialize the upload FormGroup with form controls
    this.upload = this._formBuilder.group({
      // Name input field
      name: '',
      // Hidden input field for picture data
      picture: data.picture,
      // Resolution input field
      resolution: ''
    });
  }

  // Method to close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Method called when the form is submitted
  onSubmit() {
    // Log the form value to the console
    console.log("Submitted:", this.upload.value);
    // Close the dialog and pass the form value as result
    this.dialogRef.close(this.upload.value);
  }
}
