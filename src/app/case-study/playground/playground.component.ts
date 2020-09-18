import { Component, OnInit } from '@angular/core';
import { INTROS, PLAYGROUND } from "../../case-directory";

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  intro = INTROS;
  play = PLAYGROUND;

  constructor() { }

  ngOnInit(): void {
  }

}
