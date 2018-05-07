// Import modules
import { Component, OnInit, Input } from '@angular/core';

// Import classes
import { Replay } from '../../classes/replay';

// Define component
@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  // Define inputs
  @Input() replays: Replay[]; // The value binds automatically, once the list is changed in the parent component.

  // Define a constructor
  constructor() { }

  // Define an init function
  ngOnInit() {
    // DEBUG: Remove this
    console.log('Result list component ngOnInit()');
    console.log(this);
  }

}
