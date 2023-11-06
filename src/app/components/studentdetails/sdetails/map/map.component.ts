import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit, OnDestroy {

  @Input() student: User={email:"",first_name:"",id:-1,last_name:"",latitude:0.0,longitude:0.0,role:1};
  public zoom: number = 0;
  map: any;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.map==undefined)this.loadMap()
    this.student = changes['student'].currentValue;
    const icon = L.icon({
      iconUrl: 'assets/markericon.png',
      shadowUrl: 'assets/shadow.png',
      popupAnchor: [13, 0],
    });
    var marker = L.marker([this.student.latitude, this.student.longitude], { icon }).bindPopup(this.student.latitude+","+this.student.longitude);
    console.log(marker,this.map)
    marker.addTo(this.map);
    this.map.flyTo([this.student.latitude, this.student.longitude], 12);
  }

  private loadMap(): void {
    this.map = L.map('map-container').setView([0, 0], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
      minZoom: 3,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }).addTo(this.map);
  }

  ngOnInit() {
    this.loadMap();
  }

  ngOnDestroy() {
      if (this.map) {
        this.map.off();
        this.map.remove();
        this.map.invalidateSize();
      }
    }
  }

