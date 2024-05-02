import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanetDistancePagePageRoutingModule } from './planet-distance-page-routing.module';

import { PlanetDistancePagePage } from './planet-distance-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanetDistancePagePageRoutingModule
  ],
  declarations: [PlanetDistancePagePage]
})
export class PlanetDistancePagePageModule {}
