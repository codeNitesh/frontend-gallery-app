import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from '../models/Gallery';
import {GalleryService} from '../services/gallery.service'
@Component({
  selector: 'app-home-gallery',
  templateUrl: './home-gallery.component.html',
  styleUrls: ['./home-gallery.component.css']
})
export class HomeGalleryComponent implements OnInit {

  images: Gallery[] = []
  p: number = 1;
  term: string
  constructor(private galleryService: GalleryService,
    private router: Router) { }

  ngOnInit(): void {
    this.galleryService.getAllImages()
    .subscribe(
      (res: Gallery[])=>{
        this.images = res
      },
      (err)=> console.log("err")
    )
  }

  showDetails(id: string){
    this.router.navigate([id + '/edit'])
  }

  AddNew(){
    this.router.navigate(['/new'])
  }

}
