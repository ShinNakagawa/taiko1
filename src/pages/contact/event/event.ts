import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Event } from '../../../models/event.model';

declare var google;

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  item: Event;
  place: string;
  latData: number;
  lngData: number;

  constructor(public navParams: NavParams) {
    this.item = navParams.get('item');
    let dataString = this.item.place;
    if ( dataString === null || dataString === undefined || dataString === '' ) {
      this.place = 'City hall';
      this.latData = 52.130889;
      this.lngData = -106.660233;
    } else {
      let data = dataString.split(',');
      if ( data[0] !== '' ) {
        this.place = data[0];
      }
      if ( data[1] !== '' && data[2] !== '') {
        this.latData = Number(data[1]);
        this.lngData = Number(data[2]);
      }
    }
  }

  ionViewDidLoad() {
    this.LoadMap();
  }

  LoadMap(){
    let latLng = new google.maps.LatLng(this.latData, this.lngData);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //add marker
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      title: this.place,
      position: latLng
    });
    let infoWindow = new google.maps.InfoWindow({
      content: "<h4>Center Location</h4>"
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
}
