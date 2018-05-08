// Import modules
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateCompiler, TranslateService } from '@ngx-translate/core';

// Import RxJS
import { Observable, Subscription } from 'rxjs';

// Define a pipe
@Pipe({
  name: 'duration'
})
// Define the class for the pipe
export class DurationPipe implements PipeTransform {

  // Define a constructor
  constructor(private translate: TranslateService) {}

  // Define what does this function do.
  transform(duration: number): string {
    // What our transform function should do, is take the input (a number)
    // And convert it to minutes and seconds.

    // Calculate the amount of hours & minutes.
    const _hours = Math.floor((duration / 60) / 60);
    const _minutes = Math.round(duration % 60);

    // At this point, we can create a proper return string
    return this.translate.instant('pipes.duration.hours', {
      hours: _hours,
      minutes: _minutes > 10 ? _minutes : `0${_minutes}`
    });
  }
}
