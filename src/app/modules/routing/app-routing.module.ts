// Import modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Import app pages
import { ReplayComponent } from './../../pages/replay/replay.component';
import { HomeComponent } from './../../pages/home/home.component';

// Define routes
const routes: Routes = [
  // Home / replay index
  {
    path: '',
    component: HomeComponent
  },
  // Specific replay
  {
    path: 'replay/:id',
    component: ReplayComponent
  }
];

// Export module
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
