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

  addTask(task:Task):Observable<Task>{
    //let url = this._baseurl+"/task";
    let url = "http://localhost:8083/task-service/task";
    return this._http.post<Task>(url,task);
  }

  assignWorkers(taskId:number, workersId:number): Observable<string>{
    //let url = this._baseurl + "workers/assignworkers/taskId/" +taskId +"/workersId/" +workersId;
    let url = "http://localhost:8083/task-service/assign/taskId/" + taskId +  "/workersId/"+workersId;
    return this._http.get<string>(url);
  }

  updateTask(task:Task): Observable<Task>{
    //let url = this._baseurl+ "/task";
    let url = "http://localhost:8083/task-service/task";
    return this._http.put<Task>(url,task);
  }

}
