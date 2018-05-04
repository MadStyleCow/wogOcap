import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReplayComponent } from './pages/replay/replay.component';
import { ReplayListComponent } from './pages/replay-list/replay-list.component';

// Define routes
const routes: Routes = [
  // Default redirect
  {
    path: '',
    redirectTo: '/replays',
    pathMatch: 'full'
  },
  // Replay list
  {
    path: 'replays',
    component: ReplayListComponent
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
