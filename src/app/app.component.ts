import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Comic } from './core/models/comic.interface';
import { ComicService } from './core/services/comic/comic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  maxNumber: number; //Comics number available
  comicSubscription: Subscription; //Subscription to the comic observable.
  comic: Comic; //Comic information
  ratedComic: boolean = false; //Indicates if the comic has been rated
  comicsCalifications: Comic[] = []; //Comics rated
  comicsCalificationsNumber: number[] = []; //Comics number rated
  spinner: boolean; //Charger while information is obtained
  constructor(private comicSerivce: ComicService) {}
  async ngOnInit() {
    // Get the maximum amount of comics
    this.maxNumber = await this.comicSerivce
      .getMaxNumber()
      .then((data: any) => {
        return data;
      });
    this.getData(this.maxNumber);
  }

  /**
   * Get comic information
   * @param maxNumber Comics number available
   */
  getData(maxNumber: number): void {
    this.spinner = true;
    let comicNumber = this.getComicNumber(maxNumber);
    this.comicSubscription = this.comicSerivce
      .getData(comicNumber)
      .subscribe((data: Comic) => {
        this.comic = data;
        this.spinner = false;
        this.ratedComic = false;
      });
  }

  /**
   * Rate a comic
   * @param calification Comic calification
   * @param comic Comic
   */
  qualify(calification: string, comic: Comic) {
    comic.calification = parseInt(calification);
    this.ratedComic = true;
    this.comicsCalifications.push(comic);
    this.comicsCalificationsNumber.push(comic.num);
  }

  /**
   * Gets a random comic number
   * @param maxNumber Comics number available
   */
  getComicNumber(maxNumber: number) {
    let comicNumber = Math.floor(Math.random() * maxNumber);
    do {
      comicNumber = Math.floor(Math.random() * maxNumber);
    } while (this.comicsCalificationsNumber.includes(comicNumber));
    return comicNumber;
  }
}
