import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {
  arrVar:number[] = [5, 5, 5, 2, 2, 2, 2, 2, 9,9,9,9,9,9, 4];
  occuranceOfLargeNumber:number=0;
  largestNumber:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  getOccuranceofLargestNumber(){
    
  }
}
