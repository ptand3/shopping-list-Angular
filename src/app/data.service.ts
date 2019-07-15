// The purpose of creating any service is when we want to place a 
// reusable code into different components in our app,so we create the service for the data
// The purpose of our service file will be to communicate with an API via the Angular 6 HTTP Client(A medium to interact with the API using HTTP client methods)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { } //creating an instance of httpclient
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
