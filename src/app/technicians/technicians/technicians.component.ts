import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Technicians } from 'src/app/model/technicians';
import { TechniciansService } from 'src/app/services/technicians.service';

@Component({
  selector: 'app-technicians',
  templateUrl: './technicians.component.html',
  styleUrls: ['./technicians.component.css']
})
export class TechniciansComponent implements OnInit {

  techniciansList:Technicians[]
  checked:boolean=false;
  
    constructor(private techniciansService:TechniciansService,private router:Router) { }
  
    ngOnInit(): void {
      this.techniciansService.getAlltechnicians().subscribe(
        newtechniciansList=>this.techniciansList=newtechniciansList,
        error=>console.log(error),
        ()=>console.log("Completed")
      )
    }
    onClick=(technicians:Technicians)=>{
     
      this.router.navigate(['/technicians-details',technicians.workersId])
      
    }
    ApplyFilterAvailable=(availability:string)=>{
      if(this.checked==false){
        this.techniciansService.getTechnicianByAvailability(availability).subscribe(
          response=>this.techniciansList=response,
          error=>console.log(error),
          ()=>console.log("Completed")
        );
        this.checked=true;
      }
      else{
        this.techniciansService.getAlltechnicians().subscribe(
          response=>this.techniciansList=response,
          error=>console.log(error),
          ()=>console.log("Completed")
        );
      }
    }
  
    ApplyFilterNotAvailable=(availability:string)=>{
      if(this.checked==false){
        this.techniciansService.getTechnicianByAvailability(availability).subscribe(
          response=>this.techniciansList=response,
          error=>console.log(error),
          ()=>console.log("Completed")
        );
        this.checked=true;
      }
      else{
        this.techniciansService.getAlltechnicians().subscribe(
          response=>this.techniciansList=response,
          error=>console.log(error),
          ()=>console.log("Completed")
        );
      }
    }
  

}
