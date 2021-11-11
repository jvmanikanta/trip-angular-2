import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technicians } from '../model/technicians';

@Injectable({
  providedIn: 'root'
})
export class TechniciansService {
  private _baseurl="http://localhost:9000/workers-service"
 
  constructor(private _htttpclient:HttpClient) { }
  
    getAlltechnicians():Observable<Technicians[]>{
     let url=this._baseurl+"/workers"
     return this._htttpclient.get<Technicians[]>(url)
    }
    gettechniciansById(workersId:number):Observable<Technicians>{
      let url=this._baseurl+"/workers/workersId/"+workersId;
      
      return this._htttpclient.get<Technicians>(url)
    }
    getTechnicianByAvailability(availability:string):Observable<Technicians[]>{
      let url=this._baseurl+"/workers/availability/"+availability
      return this._htttpclient.get<Technicians[]>(url)
    }
}
