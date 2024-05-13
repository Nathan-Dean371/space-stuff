import { Component, Injectable ,OnInit } from '@angular/core';
import { EpicImageGetterService } from '../epic-image-getter.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-epic',
  templateUrl: './epic.page.html',
  styleUrls: ['./epic.page.scss'],
})
@Injectable({
  providedIn: 'root'
})
export class EpicPage implements OnInit {

  public epicImageData : any;
  public epicImageUrlString : any;
  public epicImageDate : any;

  constructor(private epicImageGetter : EpicImageGetterService,  private storage : Storage) { }

  get epicImage() { return this.epicImageUrlString? this.epicImageUrlString : '';}
  get epicDate() { return this.epicImageDate? this.epicImageDate : '';}

  async ngOnInit() 
  {
    await this.storage.create();
    var todaysDate = new Date();
    const epicImageFromStorage = await this.storage.get('epicImage');
    const dateFromStorage = await this.storage.get('epicImageDate'); 

    if(epicImageFromStorage == null || todaysDate < dateFromStorage)
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
          this.storage.set('epicImage', this.epicImageUrlString);
          this.storage.set('epicImageDate', imageDate);
        });

      }
      else
      {
        console.log("Image found in storage. Using saved image.");
        this.epicImageUrlString = epicImageFromStorage;
        this.epicImageDate = dateFromStorage;
      }

    
  }

}
