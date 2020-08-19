import { Component, OnInit } from '@angular/core';
import { CARDS } from "../../cards-directory"

@Component({
  selector: 'app-work-cards',
  templateUrl: './work-cards.component.html',
  styleUrls: ['./work-cards.component.css']
})
export class WorkCardsComponent implements OnInit {
  cards = CARDS;

  constructor() { }
  ngOnInit(): void {
  }

}
