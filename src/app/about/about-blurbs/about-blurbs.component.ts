import { Component, OnInit } from '@angular/core';
import {BLURBS} from "../../blurbs-directory";

@Component({
  selector: 'app-about-blurbs',
  templateUrl: './about-blurbs.component.html',
  styleUrls: ['./about-blurbs.component.css']
})
export class AboutBlurbsComponent implements OnInit {
  blurbs = BLURBS;

  constructor() { }

  ngOnInit(): void {
  }

}