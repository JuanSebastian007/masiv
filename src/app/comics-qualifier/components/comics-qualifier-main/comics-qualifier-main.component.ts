import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/core/services/comic/comic.service';

@Component({
  selector: 'app-comics-qualifier-main',
  templateUrl: './comics-qualifier-main.component.html',
  styleUrls: ['./comics-qualifier-main.component.scss'],
  providers: [ComicService],
})
export class ComicsQualifierMainComponent implements OnInit {
  constructor(private comicSerivce: ComicService) {}

  ngOnInit(): void {
    this.comicSerivce.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
