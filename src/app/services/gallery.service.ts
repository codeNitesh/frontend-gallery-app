import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Gallery} from '../models/Gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private baseUrl = "https://backend-gallery-app.herokuapp.com/api/"
  
  constructor(private http: HttpClient) { }

  getAllImages(){
    return this.http.get(this.baseUrl);
  }

  getImageById(id: string){
    return this.http.get(this.baseUrl + "show/" + id);
  }

  createNewImage(imageData: Gallery){
    return this.http.post(this.baseUrl + "new/", imageData);
  }

  updateImage(imageData: Gallery, id: string){
    return this.http.put(this.baseUrl + id + "/edit/", imageData);
  }

  deleteImage(id: string){
    return this.http.delete(this.baseUrl + "delete/" + id);
  }
}
