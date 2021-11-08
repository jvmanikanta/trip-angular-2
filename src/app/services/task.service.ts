import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private _baseurl="http://localhost:9000/task-service";

  constructor(private _http:HttpClient) { }
  getAllTasks():Observable<Task[]>{
    let url = this._baseurl+"/tasks";
    return this._http.get<Task[]>(url);
  }


  getById(taskId:number):Observable<Task>{
    let url=this._baseurl+"/task/"+taskId
    return this._http.get<Task>(url)
  }


}
