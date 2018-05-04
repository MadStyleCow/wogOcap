import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {
  // Static methods
  // Returns a date in a short format (yyyy-mm-dd). If no date provided - an empty string is returned instead.
  static GetShortDate(date: Date): string {
    if (date) {
      return date.toISOString().substring(0, date.toISOString().indexOf('T'));
    }
    return '';
  }
}
