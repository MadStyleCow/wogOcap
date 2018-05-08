// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core/';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Third-party modules
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Services
import { ReplayService } from './../../services/replay.service';
import { UtilityService } from './../../services/utility.service';

// System + Routing components
import { AppComponent } from './../../components/app/app.component';
import { AppRoutingModule } from './../../modules/routing/app-routing.module';

// Pages
import { ReplayComponent } from './../../pages/replay/replay.component';
import { HomeComponent } from './../../pages/home/home.component';

// Components
import { MapComponent } from './../../map/map.component';
import { SearchFilterComponent } from './../../components/search-filter/search-filter.component';
import { ResultListComponent } from './../../components/result-list/result-list.component';

// Pipes
import { DurationPipe } from './../../pipes/duration.pipe';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Module definition
@NgModule({
  declarations: [
    AppComponent,
    ReplayComponent,
    HomeComponent,
    MapComponent,
    ResultListComponent,
    SearchFilterComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    LeafletModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
    ReplayService,
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
