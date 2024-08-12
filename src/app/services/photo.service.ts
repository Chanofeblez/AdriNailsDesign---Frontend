import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private apiUrl = 'https://tu-backend.com/api/photos'; // Actualiza con tu URL de API

  private http = inject(HttpClient);

  constructor() { }

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
