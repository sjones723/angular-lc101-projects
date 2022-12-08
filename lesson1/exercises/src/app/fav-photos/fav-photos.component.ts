import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Some stuff I saw that one time';
  image1 = 'https://images.vice.com/motherboard/content-images/article/12266/1400183979256723.jpg';
  image2 = 'https://newsbtc.com/wp-content/uploads/2022/11/doge-to-the-moon-scaled.jpeg';
  image3 = 'https://www.kindpng.com/picc/m/128-1283992_transparent-doge-png-doge-png-png-download.png';

  constructor() { }

  ngOnInit() {
  }

}