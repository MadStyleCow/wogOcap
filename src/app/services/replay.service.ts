// Import angular modules
import { Injectable } from '@angular/core/';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import RxJS classes
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';
import { catchError ,  map ,  tap } from 'rxjs/operators';

// Import classes
import { Replay } from './../classes/replay';
import { UtilityService } from './utility.service';
import { ServiceConfiguration } from '../../environments/environment';

@Injectable()
export class ReplayService {

  // Service constructor
  constructor(private http: HttpClient, private utilityService: UtilityService) { }

  // Service methods
  GetReplayList (type: string, name: string, newer: Date, older: Date): Observable<Replay[]> {
    // Define request parameters for this specific request
    const _httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' })
    };

    // Define a request body for this specific request
    // tslint:disable-next-line:max-line-length
    const _requestBody = `type=${type}&name=${name}&newer=${UtilityService.GetShortDate(newer)}&older=${UtilityService.GetShortDate(older)}`;

    // Construct an observable for the request and return it
    return this.http.post<Replay[]>(ServiceConfiguration.endpoints.getReplays, _requestBody, _httpOptions)
      .pipe(
        map(x => x['list']
            .map(y => new Replay(y.id, y.filename, new Date(y.date), y.mission_duration, y.mission_name, y.world_name, y.type)))
      );
  }
}
