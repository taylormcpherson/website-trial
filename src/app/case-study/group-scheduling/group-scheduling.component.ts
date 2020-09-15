import { Component, OnInit } from '@angular/core';
import { INTROS, TIMELY, TIMELYPROCESS} from "../../case-directory";

@Component({
  selector: 'app-group-scheduling',
  templateUrl: './group-scheduling.component.html',
  styleUrls: ['./group-scheduling.component.css']
})
export class GroupSchedulingComponent implements OnInit {
  intro = INTROS;
  timely = TIMELY;
  process = TIMELYPROCESS;

  constructor() { }

  ngOnInit(): void {
  }

}
