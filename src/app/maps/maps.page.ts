import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  latitude: number;
  longitude: number;
  mapType = 'roadmap';
  zoom: number;
  selectedMarker;
  markers = [
];

  // addMarker(lat: number, lng: number) {
  //   this.markers.push({ lat, lng, alpha: 0.4 });
  // }

  // max(coordType: 'lat' | 'lng'): number {
  //   return Math.max(...this.markers.map(marker => marker[coordType]));
  // }

  // min(coordType: 'lat' | 'lng'): number {
  //   return Math.min(...this.markers.map(marker => marker[coordType]));
  // }

  // selectMarker(event) {
  //   this.selectedMarker = {
  //     lat: event.latitude,
  //     lng: event.longitude
  //   };
  // }

  constructor(
    private geolocation: Geolocation,
  ) { }

  ngOnInit() {
    this.findLocation()
  }

  findLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      
      // console.log(this.latitude)
      // console.log(this.longitude)

      // console.log(resp.coords.latitude)
      // console.log(resp.coords.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // this.latitude = data.coords.latitude;
      // this.longitude = data.coords.longitude;
      // console.log(data.coords.latitude)
      // console.log(data.coords.longitude)
    });
  }

}
