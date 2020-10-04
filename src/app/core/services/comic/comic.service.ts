import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Comic } from '../../models/comic.interface';
@Injectable({
  providedIn: 'root',
})
export class ComicService {
  maxNumber: number;
  constructor(private http: HttpClient) {
    this.getMaxNumber();
  }

  /**
   * Se retorna la solicitud (observable) de informacion de un comic con un numero especifico.
   * @param comicNumber Numero de comic a retornar
   */
  getData(comicNumber: number): Observable<Comic> {
    return this.http.get<Comic>(`/${comicNumber}/info.0.json`);
  }

  /**
   * Se retorna el numero del comic actual
   */
  getMaxNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.http.get('/info.0.json').subscribe((data: Comic) => {
        if (data.num) {
          resolve(data.num);
        } else {
          reject(0);
        }
      });
    });
  }
}
