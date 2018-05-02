// Import modules
import { Component, OnInit } from '@angular/core';

// Import classes
import Map from '../classes/map';
import { LatLng, TileLayer } from 'leaflet';


// Map component description
@Component({
  selector: 'app-map',                    // Generated CSS selector
  templateUrl: './map.component.html',    // HTML template URI
  styleUrls: ['./map.component.css']      // CSS style URI
})

// A class describing t
export class MapComponent implements OnInit {
  // Map settings
  mapSettings = {
    layers: [
      new TileLayer('http://ocap.wogames.info/images/maps/chernarus/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxNativeZoom: 6, // Max zoom, for which the tiles will be loaded (OCAP only has up to zoom 6)
        maxZoom: 9, // However allow the user to zoom closer, so that he can see stuff more closely.
        noWrap: true, // Disable word duplication
        subdomains: [
          'tile'
        ]
      })
    ],
    zoom: 5,
    center: new LatLng(46.879966, -121.726909)
  };

  // Constructor
  consctructor() {}

  // onInit method of the component, called once the component is drawn
  ngOnInit() {}
}
