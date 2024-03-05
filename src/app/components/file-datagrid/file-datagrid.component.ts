import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { PictureService } from '../../services/picture.service';
import { ShowPictureComponent } from '../../dialog/show-picture/show-picture.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-file-datagrid',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './file-datagrid.component.html',
  styleUrl: './file-datagrid.component.css'
})
export class FileDatagridComponent implements OnInit {

  constructor (private pictureService: PictureService, private dialog: MatDialog) {}
  @Input() uploadedPicture: File | null = null;
pictures: any[] = [];

  ngOnInit(): void {
    this.pictureService.getAllPictures().subscribe(pictures => {
      this.pictures = pictures;
    });
  }


  openPictureDialog(imageUrl: string): void  {
    this.dialog.open(ShowPictureComponent, {
        width: '70%',
        height: '70%',
        data: {imageUrl}
    });
  }

}
