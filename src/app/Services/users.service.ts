import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      catchError((Error: any) => {
        return throwError( ()=> new Error('Something went wrong; please try again later.'));
      });
  }
  getuser(id:number){
    return this.http
    .get('https://jsonplaceholder.typicode.com/users/'+id)
  }
} 
