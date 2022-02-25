import { Component, OnInit } from '@angular/core';
import { TestServiceService } from 'src/app/test-service.service';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  average:number=0;
  
  max:number=0;
  min:number=0;
  arrOfNumber:number[]=[];
 
  constructor(private testWebService:TestServiceService) { }

  ngOnInit(): void {
  }

  getMax(arr:number[]){
    
  }
  getMin(arr:number[]){
   
  }
  getAverage(arr:number[]){
   
  }
 

  refeshContent(){
   

  }

}
