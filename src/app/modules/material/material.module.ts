// Import Angular modules
import { NgModule } from '@angular/core';

// Import required UI elements from Angular material
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  exports: [MatButtonModule, MatCheckboxModule]
})
export class MaterialModule { }
