import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrevXIYSGrGYcARw9I124tfTBlyFD95Xk'
    })
  ],
  providers: [Geolocation],
  declarations: [MapsPage]
})
export class MapsPageModule {}
