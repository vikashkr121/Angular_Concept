import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-user',
  template: `
     <table class="table table-bordered">
      <tr>
       <th>Name</th>
       <td> {{user.username}} </td>
      </tr>
      <tr>
       <th>Email</th>
       <td> {{user.name}} </td>
      </tr>
      <tr>
       <th>Username</th>
       <td> {{user.email}} </td>
      </tr>
     </table>

     <div>
        <ul class="nav nav-tabs ">
          <li class="nav-item active ">
            <a class="nav-link " routerLink="address">Address</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" routerLink="company">Company</a>
        
        </ul>

        <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute, private userservice:UsersService){}
  user:any
  ngOnInit(): void {
      let id=(this.route.snapshot.params['id'])
      this.userservice.getuser(id).subscribe(u=>{
        this.user=u 
      })
  }

}
