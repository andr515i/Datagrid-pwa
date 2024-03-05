import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-show-picture',
  standalone: true,
  imports: [],
  templateUrl: './show-picture.component.html',
  styleUrl: './show-picture.component.css'
})
export class ShowPictureComponent {
constructor (@Inject(MAT_DIALOG_DATA) public data: any) {}
}
