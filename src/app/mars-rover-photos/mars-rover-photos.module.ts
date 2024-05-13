import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsRoverPhotosPageRoutingModule } from './mars-rover-photos-routing.module';

import { MarsRoverPhotosPage } from './mars-rover-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsRoverPhotosPageRoutingModule
  ],
  declarations: [MarsRoverPhotosPage]
})
export class MarsRoverPhotosPageModule {}
