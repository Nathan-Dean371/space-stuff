import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoverImageGetterService 
{
  public roverIamges : any;


  constructor(public http:HttpClient) {}


  getRoverImages() : Observable<any>
  {
    //Pick a random day from curiosity's mission
    var randomSol = Math.floor(Math.random() * 4181);
  
    return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + randomSol  +'&api_key=eLAInztqQez7c9E6RLMScXQ4fzY55cWdKZVXjRDA');
  }
}
