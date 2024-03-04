import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FileDatagridComponent } from "./components/file-datagrid/file-datagrid.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FileDatagridComponent]
})
export class AppComponent {
  title = 'FirstPWA';
}
