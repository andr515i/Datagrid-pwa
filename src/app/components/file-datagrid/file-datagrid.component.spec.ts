import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDatagridComponent } from './file-datagrid.component';

describe('FileDatagridComponent', () => {
  let component: FileDatagridComponent;
  let fixture: ComponentFixture<FileDatagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileDatagridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileDatagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
