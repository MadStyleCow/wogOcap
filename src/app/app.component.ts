// Import angular modules
import { Component } from '@angular/core';

// Third party modules
import { TranslateService } from '@ngx-translate/core';

// Define component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Define an exported class
export class AppComponent {

  // Define a constructor
  constructor(translate: TranslateService) {
    // Set fallback language settings.
    translate.setDefaultLang('en');

    // Set default language
    translate.use('ru');
  }

}
