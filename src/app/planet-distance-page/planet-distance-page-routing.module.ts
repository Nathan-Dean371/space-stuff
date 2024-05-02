import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetDistancePagePage } from './planet-distance-page.page';

const routes: Routes = [
  {
    path: '',
    component: PlanetDistancePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetDistancePagePageRoutingModule {}
