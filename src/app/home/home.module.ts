import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { PODBackgroundComponent } from '../pod-background/pod-background.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { IonButton } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PODBackgroundComponent, MainMenuComponent]
})
export class HomePageModule {}
