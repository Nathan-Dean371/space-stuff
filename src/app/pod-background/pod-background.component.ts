import { Component, Injectable, OnInit } from '@angular/core';
import { PodImageGetterService } from '../pod-image-getter.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-pod-background',
  templateUrl: './pod-background.component.html',
  styleUrls: ['./pod-background.component.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class PODBackgroundComponent  implements OnInit {

  public podImageData: any;


  constructor(private podImageGetter: PodImageGetterService, private storage : Storage) { }

  get podImage() { return this.podImageData ? this.podImageData : '';}

  async ngOnInit() 
  {
    await this.storage.create();
    var todaysDate = new Date();
    const podImageFromStorage = await this.storage.get('podImage');
    const dateFromStorage = await this.storage.get('podImageDate'); 

    if(podImageFromStorage == null || todaysDate < dateFromStorage)
    {
      console.log("Image not saved in storage or image from yesterday Fetching from API.");
      this.podImageGetter.getImage().subscribe((data) => {
        console.log(data);
  
        if(data.media_type == 'video')
        {
          data.url = data.thumbnail_url;
        }
        
  
        this.podImageData = data;
        this.storage.set('podImage', data);
        this.storage.set('podImageDate', new Date());
      });
    }
    else
    {
      console.log("Image found in storage. Using saved image.");
      this.podImageData = podImageFromStorage;
    }
  }

}
