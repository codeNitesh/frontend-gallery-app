import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../models/gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-edit-gallery',
  templateUrl: './edit-gallery.component.html',
  styleUrls: ['./edit-gallery.component.css']
})
export class EditGalleryComponent implements OnInit {
  id: string
  image: Gallery

  isUpdated: boolean = false
  isDeleted: boolean = false

  constructor(
    private route: ActivatedRoute,
    private galleryService: GalleryService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

    this.galleryService.getImageById(this.route.snapshot.paramMap.get('id'))
    .subscribe(
      (res: Gallery)=> this.image = res,
      (err)=> console.log(err)
    )
  }

  updateData(){
    this.galleryService.updateImage(this.image, this.id)
    .subscribe(
      (res)=> this.isUpdated = true,
      (err)=> console.log(err)
    )
  }

  deleteData(id: string){
    this.galleryService.deleteImage(this.id)
    .subscribe(
      (res)=> this.isDeleted = true,
      (err)=> console.log(err)
    )
  }

}
