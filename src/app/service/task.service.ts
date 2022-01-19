import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = ' Http://localHost:3000/tasks'

  constructor(
    private http:HttpClient
  ) {}

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl)
    
  }
}
