import { Component, inject, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  photos: any[] = [];

  private photoService = inject(PhotoService);

  constructor() { }

  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    // Lógica para cargar las fotos de la galería
    this.photoService.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }

}
