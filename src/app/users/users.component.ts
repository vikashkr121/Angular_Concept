import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  pageTitle:string="This Page data coming from the services file"
  title = 'newProj';
  users:any
  errorMessage:string="Loading...."
   constructor(private userservices:UsersService, private router:Router){}

   ngOnInit(): void {
       this.userservices.getAllUsers().subscribe((data)=>{
        this.users=data;
       },(err)=>{
        this.errorMessage="Some technical issue while api call"
       })
   }

  
}
