import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serviceData: string = "Data from Api Service"
  constructor(private http: HttpClient) { }
  showName(data: string) {
    alert(data)
  }
  // example: call api
  getAllPost() {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  }
}
