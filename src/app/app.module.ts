// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core/';
import { HttpClientModule } from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

// Services
import { ReplayService } from './services/replay.service';
import { UtilityService } from './services/utility.service';

// Component
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ReplayComponent } from './pages/replay/replay.component';
import { ReplayListComponent } from './/pages/replay-list/replay-list.component';
import { AppRoutingModule } from './app-routing.module';

// Module definition
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ReplayComponent,
    ReplayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
  ],
  providers: [ReplayService, UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
