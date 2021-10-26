import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditGalleryComponent } from './edit-gallery/edit-gallery.component';
import { HomeGalleryComponent } from './home-gallery/home-gallery.component';
import { NewGalleryComponent } from './new-gallery/new-gallery.component';
import { ViewGalleryComponent } from './view-gallery/view-gallery.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeGalleryComponent,
    data : {  
      title: 'Home Gallery '  
    },
  },
  {
    path: 'show/:id',
    component: ViewGalleryComponent,
    data : {  
      title: 'View Image '  
    },
  },
  {
    path: 'new',
    component: NewGalleryComponent,
    data : {  
      title: 'Create Image '  
    },
  },
  {
    path: ':id/edit',
    component: EditGalleryComponent,
    data : {  
      title: 'Edit Image '  
    },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
