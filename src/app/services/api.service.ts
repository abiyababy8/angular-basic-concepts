import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceData: string = "Data from Api Service"
  constructor() { }
  showName() {
    alert("Max Miller")
  }
}
