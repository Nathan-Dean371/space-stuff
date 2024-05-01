import { Component, OnInit } from '@angular/core';
import { EpicImageGetterService } from '../epic-image-getter.service';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.page.html',
  styleUrls: ['./epic.page.scss'],
})
export class EpicPage implements OnInit {

  public epicImageData : any;

  constructor(private epicImageGetter : EpicImageGetterService) { }

  get epicImage() { return this.epicImageData ? this.epicImageData : '';}

  ngOnInit() 
  {
    this.epicImageGetter.getMetaData().subscribe((data) => {
      this.epicImageData = data;
      console.log("Meta: ");
      console.log(this.epicImageData);
      this.epicImageGetter.getEpicImage(this.epicImageData[0].image).subscribe((data) => {
        this.epicImageData = data;
        console.log("Epic: ");
        console.log(this.epicImageData);
      });
    });

    
  }

}
