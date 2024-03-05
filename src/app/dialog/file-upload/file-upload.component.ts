import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatDialogModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  upload!: FormGroup;

  constructor(public dialogRef: MatDialogRef<FileUploadComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder) {
    this.upload = this._formBuilder.group({
      name: '',
      picture: data.picture,
      resolution: ''
    })

  }

  closeDialog(): void {
    this.dialogRef.close();
  }


  onSubmit() {
    console.log("Submitted:", this.upload.value);
    this.dialogRef.close(this.upload.value);
  }
}
