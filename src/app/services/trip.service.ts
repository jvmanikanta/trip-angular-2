import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenence } from '../model/maintenence';
import { Trip } from '../model/trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private _baseurl="http://localhost:9000/trip-service"

  constructor(private _httpclient:HttpClient) { }

  getAllTrip():Observable<Trip[]>{
    let url=this._baseurl+"/trip"
    return this._httpclient.get<Trip[]>(url)
  }
  getTripById(tripId:number):Observable<Trip>{
    let url=this._baseurl+"/trip/"+tripId 
    return this._httpclient.get<Trip>(url)
  }
  getTripByPriority(priority:string):Observable<Trip[]>{
    let url=this._baseurl+"/trip/priority/"+priority
    return this._httpclient.get<Trip[]>(url)
  }
  getMaintenenceByTripId(tripId:number):Observable<Maintenence[]>{
    let url=this._baseurl+"/maintenence/tripId/"+tripId
    return this._httpclient.get<Maintenence[]>(url)
  }
}
