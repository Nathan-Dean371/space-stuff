import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpicPageRoutingModule } from './epic-routing.module';

import { EpicPage } from './epic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpicPageRoutingModule
  ],
  declarations: [EpicPage]
})
export class EpicPageModule {}
