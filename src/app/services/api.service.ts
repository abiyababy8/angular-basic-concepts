import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceData: string = "Data from Api Service"
  count = signal(10) //define signal with initial value
  constructor(private http: HttpClient) { }
  showName(data: string) {
    alert(data)
  }
  // example: call api
  getAllPost() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
  resetSignalValue(){
    this.count.set(0)
  }
}
