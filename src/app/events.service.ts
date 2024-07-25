import { Injectable } from '@angular/core';  
import { Quarter } from './models/quarter';
import { Event } from './models/event';
import { Resource } from './models/resource';
import { Observable, of } from 'rxjs';

  
@Injectable({  
  providedIn: 'root'  
})  
export class EventsService {  

  private resources: Resource[] = [    
    { id: 'r1', title: 'Team A', color: { primary: '#FF0000', secondary: '#FF7F50' } }, // 假设主色为红色，次色为橙色  
    { id: 'r2', title: 'Team B', color: { primary: '#00FF00' } }, // 假设主色为绿色，没有次色  
    // ...其他资源    
  ];  
  
  private events: Event[] = [  
    { id: 'e1', title: 'Meeting', start: new Date(2023, 3, 1), end: new Date(2023, 3, 1, 1, 30), resourceId: 'r1' },  
    // ...其他事件  
  ];  
  
  private quarters: Quarter[] = [  
    { id: 'Q1', name: 'Quarter 1', months: ['Jan', 'Feb', 'Mar'] },  
    // ...其他季度  
  ];  
  

  getResources(): Observable<Resource[]> {  
    return of(this.resources);  
  }  
  
  getEvents(): Observable<Event[]> {  
    return of(this.events);  
  }  
  
  getQuarters(): Observable<Quarter[]> { 
    return of(this.quarters);   
  }  
}  