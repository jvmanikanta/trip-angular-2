import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Technicians } from 'src/app/model/technicians';
import { TechniciansService } from 'src/app/services/technicians.service';

@Component({
  selector: 'app-technicians-details',
  templateUrl: './technicians-details.component.html',
  styleUrls: ['./technicians-details.component.css']
})
export class TechniciansDetailsComponent implements OnInit {

  workersId:number
  technicians:Technicians
    constructor(private _techniciansService:TechniciansService,private _activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      (map)=>{
        this.workersId=parseInt(map.get("id"))
      }
    )
    this._techniciansService.gettechniciansById(this.workersId).subscribe(
      response=>{
        this.technicians=response;
      },
      error=>console.log(error),
      ()=>console.log("Completed")
    )
  }

}
  


