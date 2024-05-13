import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EpicImageGetterService 
{

  public metaData : any;
  public date : any;
  public epicImage: any;
  

  constructor(public http:HttpClient) 
  {
    
    
  }

  getMetaData() : Observable<any>
  {
    return this.http.get('https://api.nasa.gov/EPIC/api/natural/images/?api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA');

  }
  getEpicImage(imageName : string, date : string) : String
  {
    return 'https://api.nasa.gov/EPIC/archive/natural/' + date + '/png/' + imageName + '.png' + '?api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA';
  }

  
}
