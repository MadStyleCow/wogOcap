import { Component, OnInit } from '@angular/core';

// Import service
import { ReplayService } from './../../services/replay.service';
import { Replay } from '../../classes/replay';

@Component({
  selector: 'app-replay-list',
  templateUrl: './replay-list.component.html',
  styleUrls: ['./replay-list.component.css']
})
export class ReplayListComponent implements OnInit {
  // Variables
  replays: Replay[];

  constructor(private replayService: ReplayService) { }

  ngOnInit() {
    this.replayService.GetReplayList('', '', null, new Date())
      .subscribe(replays => this.replays = replays);

    console.log(this);
  }

}
