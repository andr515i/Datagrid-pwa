// Import necessary modules and components from Angular core and Angular Material
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Component decorator defines metadata for the component
@Component({
  // Selector for the component in HTML markup
  selector: 'app-show-picture',
  // Indicates that this component should be treated as a standalone Angular element
  standalone: true,
  // No imports are needed for this component
  imports: [],
  // Path to the template file for the component
  templateUrl: './show-picture.component.html',
  // Path to the CSS file for the component
  styleUrl: './show-picture.component.css'
})
// Class declaration for the component
export class ShowPictureComponent {
  // Constructor function, injecting MAT_DIALOG_DATA to access data passed to the dialog
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
