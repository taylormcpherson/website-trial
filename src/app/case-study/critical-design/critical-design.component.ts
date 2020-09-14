import { Component, OnInit } from '@angular/core';
import { INTROS } from "../../case-directory";


@Component({
  selector: 'app-critical-design',
  templateUrl: './critical-design.component.html',
  styleUrls: ['./critical-design.component.css']
})
export class CriticalDesignComponent implements OnInit {
  intros = INTROS;
  constructor(){
  }

  ngOnInit(): void {
  }

}
