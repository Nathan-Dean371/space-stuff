import { Component, OnInit } from '@angular/core';
import { PodImageGetterService } from '../pod-image-getter.service';

@Component({
  selector: 'app-pod-background',
  templateUrl: './pod-background.component.html',
  styleUrls: ['./pod-background.component.scss'],
})
export class PODBackgroundComponent  implements OnInit {

  public podImageData: any;


  constructor(private podImageGetter: PodImageGetterService) { }

  get podImage() { return this.podImageData ? this.podImageData : '';}

  ngOnInit() 
  {
    this.podImageGetter.getImage().subscribe((data) => {
      console.log(data);
      this.podImageData = data;
    });

  }

}
