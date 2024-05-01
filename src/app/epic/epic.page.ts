import { Component, OnInit } from '@angular/core';
import { EpicImageGetterService } from '../epic-image-getter.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.page.html',
  styleUrls: ['./epic.page.scss'],
})
export class EpicPage implements OnInit {

  public epicImageData : any;
  public epicImageUrlString : any;
  public epicImageDate : any;

  constructor(private epicImageGetter : EpicImageGetterService) { }

  get epicImage() { return this.epicImageUrlString? this.epicImageUrlString : '';}
  get epicDate() { return this.epicImageDate? this.epicImageDate : '';}

  ngOnInit() 
  {
    this.epicImageGetter.getMetaData().subscribe((data) => {
      this.epicImageData = data;
      var imageDate = data[0].date;
      imageDate = imageDate.split(' ')[0];
      this.epicImageDate = imageDate;
      //replace the dashes with slashes
      imageDate = imageDate.replace(/-/g, '/');
      console.log(imageDate);

      
      this.epicImageUrlString = this.epicImageGetter.getEpicImage(this.epicImageData[0].image, imageDate);
    });

    
  }

}
