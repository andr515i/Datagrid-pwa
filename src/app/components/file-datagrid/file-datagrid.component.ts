import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table'

@Component({
  selector: 'app-file-datagrid',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './file-datagrid.component.html',
  styleUrl: './file-datagrid.component.css'
})
export class FileDatagridComponent {

  dataSource: any;
  

  displayedColumns: string[] = ['Picture', 'Name', 'Size']; 

}
