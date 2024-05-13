import { Component, OnInit } from '@angular/core';
import { EphemerisGetterService } from '../ephemeris-getter.service';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-planet-distance-page',
  templateUrl: './planet-distance-page.page.html',
  styleUrls: ['./planet-distance-page.page.scss'],
})
export class PlanetDistancePagePage implements OnInit 
{

  public distanceHolder : any;
  public sourcePlanetName : any;
  public targetPlanetName : any;

  constructor(private ephemerisGetter : EphemerisGetterService) { }

  get distance() { return this.distanceHolder ? this.distanceHolder : '';}
  get sourcePlanet () { return this.ConvertFromPlanetIDtoString(this.sourcePlanetName) ? this.sourcePlanetName : '';}
  get targetPlanet () { return this.ConvertFromPlanetIDtoString(this.targetPlanetName) ? this.targetPlanetName : '';}

  ngOnInit() 
  {
    
  }

  ConvertFromPlanetIDtoString(planetID : number) : string
  {
    switch(planetID)
    {
      case 199:
        return "Mercury";
      case 299:
        return "Venus";
      case 399:
        return "Earth";
      case 499:
        return "Mars";
      case 599:
        return "Jupiter";
      case 699:
        return "Saturn";
      case 799:
        return "Uranus";
      case 899:
        return "Neptune";
      default:
        return "Invalid Planet ID";  
    }
  }

  getDistance()
  {
    //Get input from the selectors
    var planet1 = (<HTMLInputElement>document.getElementById('originSelector')).value;
    var planet2 = (<HTMLInputElement>document.getElementById('targetSelector')).value;

    //Console log the planets
    console.log('Planet 1: ' + planet1);
    console.log('Planet 2: ' + planet2);


    //Get the distance between the two planets
    this.ephemerisGetter.getEphemeris(planet1, planet2).subscribe(
      (data) => {
        console.log(data);

        console.log('Extracting coordinates...');
        // Extracting X, Y, and Z coordinates
        const resultString = `...`; // Your result string here

        // Search for the start and end markers
        const startMarker = "$$SOE";
        const endMarker = "$$EOE";

        // Find the start and end positions of the data section
        const startIndex = data.result.indexOf(startMarker);
        const endIndex = data.result.indexOf(endMarker);
        console.log(startIndex, endIndex);

        // Extract the data section
        const dataSection = data.result.substring(startIndex + startMarker.length, endIndex) as string;
        console.log(dataSection);

        // Split the data section by lines
        const lines = dataSection.split("\n");

        // Initialize variables to store the coordinates
        let xCoordinate : number = 0;
        let yCoordinate : number = 0;
        let zCoordinate : number = 0;

        console.log(lines);
        
        //extract x y and z from a line matching this ' " X = 2.956360699348484E+08 Y =-3.036841220483854E+05 Z =-6.528103712603086E+06" '
        let line = lines[2];

          if (line.includes("X =")) {
            const xMatch = line.match(/(X = |X =)([\d\.\+\-E]+)/);
            if (xMatch) {
              xCoordinate = parseFloat(xMatch[2]);
            }
          }
          if (line.includes("Y =")) 
            {
              const yMatch = line.match(/(Y = |Y =)([\d\.\+\-E]+)/);
              if (yMatch) 
              {
                yCoordinate = parseFloat(yMatch[2]);
                
              }
            }
          if (line.includes("Z =")) {
            const zMatch = line.match(/(Z = |Z =)([\d\.\+\-E]+)/);
            if (zMatch) {
              console.log(zMatch);
              zCoordinate = parseFloat(zMatch[2]);
            }
          }
        
        // Output the extracted coordinates
        console.log("X coordinate:", xCoordinate);
        console.log("Y coordinate:", yCoordinate);
        console.log("Z coordinate:", zCoordinate);

        // Calculate the distance from 0 , 0 , 0
        const distance = Math.sqrt(xCoordinate * xCoordinate + yCoordinate * yCoordinate + zCoordinate * zCoordinate);
        //limit distance to 2 decimal places
        let roundedDistance = distance.toFixed(2);

        console.log("Distance from the origin:", distance + "km");
        this.distanceHolder = roundedDistance;

      },
      (error) => {
        console.log('Error fetching ephemeris data:');

        console.log(error);
      }
    );


  }

  calculateDistance()
  {
    this.sourcePlanetName = this.ConvertFromPlanetIDtoString( parseInt((<HTMLInputElement>document.getElementById('originSelector')).value));
    this.targetPlanetName = this.ConvertFromPlanetIDtoString( parseInt((<HTMLInputElement>document.getElementById('targetSelector')).value));


    console.log('Calculating distance...');
    this.getDistance();
  }

  

}
