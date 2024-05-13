import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EpicPageModule } from './epic/epic.module';
import { EpicPageRoutingModule } from './epic/epic-routing.module';
import { EpicPage } from './epic/epic.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'epic',
    component : EpicPage
  },
  {
    path: 'planet-distance-page',
    loadChildren: () => import('./planet-distance-page/planet-distance-page.module').then( m => m.PlanetDistancePagePageModule)
  },
  {
    path: 'mars-rover-photos',
    loadChildren: () => import('./mars-rover-photos/mars-rover-photos.module').then( m => m.MarsRoverPhotosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
