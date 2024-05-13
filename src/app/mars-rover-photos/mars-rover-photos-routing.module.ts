import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarsRoverPhotosPage } from './mars-rover-photos.page';

const routes: Routes = [
  {
    path: '',
    component: MarsRoverPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarsRoverPhotosPageRoutingModule {}
