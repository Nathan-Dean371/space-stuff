import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PodImageGetterService {

  constructor(public http:HttpClient){}

  getImage():Observable<any>
  {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA');
  }
}
