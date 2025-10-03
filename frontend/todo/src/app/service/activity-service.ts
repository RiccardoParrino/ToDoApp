import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ActivityDTO } from '../dto/activity.dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  createEndpoint:string = "http://localhost:8080/activity/createActivity";
  readEndpoint:string = "http://localhost:8080/activity/findAll";
  updateEndpoint:string = "http://localhost:8080/activity/updateActivity";
  deleteEndpoint:string = "http://localhost:8080/activity/deleteActivity";

  private messageSource = new Subject<boolean>();
  message$ = this.messageSource.asObservable();

  constructor (private http:HttpClient) {}

  readActivity() : Observable<ActivityDTO[]> {
    return this.http.get<ActivityDTO[]>(this.readEndpoint);
  }

  createActivity(newActivity:ActivityDTO) : Observable<Boolean> {
    return this.http.post<Boolean>(this.createEndpoint, newActivity);
  }

  updateActivity(newActivity:any) : Observable<Boolean> {
    // const name = req.body.name;
    // const newName = req.body.newName;
    // const newDate = req.body.newDate;
    // const newDescription = req.body.newDescription;
    // const newCity = req.body.newCity;
    return this.http.post<Boolean>(this.updateEndpoint, newActivity);
  }

  deleteActivity(name:string) : Observable<any> {
    const params = new HttpParams()
      .set('name', name);
    return this.http.get<any>(this.deleteEndpoint, {params});
  }

  sendMessage(message: boolean) {
    this.messageSource.next(message);
  }

}
