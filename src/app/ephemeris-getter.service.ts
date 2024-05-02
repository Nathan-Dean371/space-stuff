import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EphemerisGetterService {

  constructor(public http : HttpClient) { }

  getEphemeris() : Observable<any>
  {
    const queryParameters = new URLSearchParams(
      { 
        format: 'json',
        COMMAND:'499',
        OBJ_DATA:'NO',
        MAKE_EPHEM:'YES',
        EPHEM_TYPE:'VECTOR',
        CENTER : '500@10',
        START_TIME:'2024-05-01',
        STOP_TIME:'2024-05-02',
        STEP_SIZE:'1d',
        VEC_TABLE: '1',
      });

      const header : HttpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Allow-Control-Allow-Origin': '*'
        });

      


    return this.http.get('https://thingproxy.freeboard.io/fetch/https://ssd.jpl.nasa.gov/api/horizons.api?' + queryParameters.toString(), {headers : header});
  }


}
