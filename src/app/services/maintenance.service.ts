import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Maintenence } from '../model/maintenence';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})

/**
 * @author JVmanikanta
 */
export class MaintenanceService {

  private baseurl = "http://localhost:9000/maintenence-service";
  constructor(private _http:HttpClient) { } 

  getAllMaintenences() : Observable<Maintenence[]> {
    let url = this.baseurl + "/maintenence";
    return this._http.get<Maintenence[]>(url);
  }

  getById(maintenenceId:number) : Observable<Maintenence>{
    let url = this.baseurl + "/maintenence/maintenenceId/" + maintenenceId;
    return this._http.get<Maintenence>(url);
  }

  getTaskByMaintenenceId(maintenenceId:number) : Observable<Task[]>{
    let url = this.baseurl + "/maintenence/tasks/maintenenceId/" + maintenenceId;
    return this._http.get<Task[]>(url);
  }

  getMaintenenceByPriority(priority:string) : Observable<Maintenence[]> {
    let url = this.baseurl + "/maintenence/priority/"+priority;
    return this._http.get<Maintenence[]>(url);
  }

  addMaintenence(maintenence: Maintenence) : Observable<Maintenence>{
    let url = "http://localhost:8082/maintenence-service/maintenence";
    //let url = this.baseurl + "/maintenence";
    return this._http.post<Maintenence>(url,maintenence); 
  }

  assignTask(maintenenceId:number,taskId:number): Observable<string>{
    let url = this.baseurl + "/maintenence/task/assigntask/maintenenceId/"+ maintenenceId +"/taskId/"+ taskId
    return this._http.get<string>(url);
  }

  updateMaintenance(maintenence: Maintenence): Observable<Maintenence>{
    //let url = this.baseurl + "/maintenence";
    let url = "http://localhost:8082/maintenence-service/maintenence";
    return this._http.put<Maintenence>(url,maintenence);
  }
}
