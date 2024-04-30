import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpicPage } from './epic.page';

const routes: Routes = [
  {
    path: 'epic',
    component: EpicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpicPageRoutingModule {}
