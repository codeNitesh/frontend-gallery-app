import { Component, OnInit } from '@angular/core';
import { Gallery } from '../models/Gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-new-gallery',
  templateUrl: './new-gallery.component.html',
  styleUrls: ['./new-gallery.component.css']
})
export class NewGalleryComponent implements OnInit {

  image: Gallery = new Gallery()
  isSaved: boolean = false
  urlerror: boolean = false

  constructor(
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
  }

  saveData(){
    var pattern=/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

    if(pattern.test(this.image.imgURL)){
      this.galleryService.createNewImage(this.image)
    .subscribe(
      (res)=> this.isSaved = true,
      (err)=> console.log(err)
    )
  }else{
      this.urlerror = true
    }
    
  }

}
