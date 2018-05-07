// External libraries
import { Component, OnInit } from '@angular/core';

// Services
import { ReplayService } from './../../services/replay.service';

// Classes
import { Replay } from '../../classes/replay';

// Component description
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Internal variables & properties
  replays: Replay[];

  // Define a constructor service
  constructor(private replayService: ReplayService) { }

  // Init
  ngOnInit() {
    // DEBUG: Remove me
    console.log('Replay list init');

    // Request replay data from the back-end
    this.replayService.GetReplayList('', '', null, new Date())
      .subscribe(replays => this.replays = replays);
  }
}
