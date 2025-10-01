import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityDTO } from '../dto/activity.dto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  
  createEndpoint:string = "http://localhost:8080/activity/createActivity";
  readEndpoint:string = "http://localhost:8080/activity/readActivity";
  updateEndpoint:string = "http://localhost:8080/activity/udpateActivity";
  deleteEndpoint:string = "http://localhost:8080/activity/deleteActivity";

  constructor (private http:HttpClient) {}

  readActivity() : Observable<ActivityDTO[]> {
    return this.http.get<ActivityDTO[]>(this.readEndpoint);
  }

  createActivity(newActivity:ActivityDTO) : Observable<Boolean> {
    const params = new HttpParams()
      .set('name', newActivity.name)
      .set('description', newActivity.description)
      .set('date', newActivity.date)
      .set('city', newActivity.city);
    return this.http.post<Boolean>(this.createEndpoint, {params});
  }

  updateActivity(newActivity:ActivityDTO) : Observable<Boolean> {
    const params = new HttpParams()
      .set('name', newActivity.name)
      .set('description', newActivity.description)
      .set('date', newActivity.date)
      .set('city', newActivity.city);
    return this.http.get<Boolean>(this.updateEndpoint);
  }

  deleteActivity(name:string) : Observable<Boolean> {
    const params = new HttpParams()
      .set('name', name);
    return this.http.get<Boolean>(this.deleteEndpoint, {params});
  }

}
