import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  private pictures: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  
  
  constructor() { }

  addPicture(picture: any) {
    const currentPictures = this.pictures.getValue();
    this.pictures.next([...currentPictures, picture]);
  }

 getAllPictures(): Observable<any[]> {
    return this.pictures.asObservable();
  }

}
