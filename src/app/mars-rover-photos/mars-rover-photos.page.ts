import { Component, OnInit } from '@angular/core';
import { RoverImageGetterService } from '../rover-image-getter.service';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.page.html',
  styleUrls: ['./mars-rover-photos.page.scss'],
})
export class MarsRoverPhotosPage implements OnInit {

  public roverImages: any;
  public imageIndex = 0;

  constructor(private roverImageGetter : RoverImageGetterService) { }

  get roverImage() { return this.roverImages ? this.roverImages : '';}

  ngOnInit() 
  {
    this.roverImageGetter.getRoverImages().subscribe((data) => {
      this.roverImages = data;
      console.log(this.roverImages);
    });

    
  }

}
