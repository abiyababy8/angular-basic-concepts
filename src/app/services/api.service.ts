import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceData: string = "Data from Api Service"
  constructor(private http:HttpClient) { }
  showName(data:string) {
    alert(data)
  }
  // example: call api
  getAllPost(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
