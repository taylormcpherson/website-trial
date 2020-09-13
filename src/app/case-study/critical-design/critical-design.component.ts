import { Component, OnInit } from '@angular/core';
import { CASES } from "../../case-study-directory";


@Component({
  selector: 'app-critical-design',
  templateUrl: './critical-design.component.html',
  styleUrls: ['./critical-design.component.css']
})
export class CriticalDesignComponent implements OnInit {
  cases = CASES;
  constructor(){
  }

  ngOnInit(): void {
  }

}
