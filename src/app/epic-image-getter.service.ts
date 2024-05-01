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
    
    var year = '2019';
    var month = '05';
    var day = '30';
    
    
    return this.http.get('https://api.nasa.gov/EPIC/api/natural/date/' + year + '-' + month + '-' + day + '?api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA');

  }
  getEpicImage(imageName : string) : Observable<any>
  {
    var year = '2019';
    var month = '05';
    var day = '30';

    return this.http.get('https://api.nasa.gov/EPIC/archive/natural/png/' + year + '/' + month + '/' + day + '/' + imageName + '.png' + '?api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA');
  }

  
}
