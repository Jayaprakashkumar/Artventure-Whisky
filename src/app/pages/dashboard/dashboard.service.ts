import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private messageSource = new BehaviorSubject('Artist Name');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  UpdateArtistName(name : string){
    this.messageSource.next(name);
  }
}
