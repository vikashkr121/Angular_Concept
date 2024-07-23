import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import {AdminGuard} from './guards/admin.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { unSavedChangeGuard } from './guards/un-saved-change.guard';


  
const routes: Routes = [
  {path:" ", redirectTo:"users", pathMatch:"full"},
  {path:"addUser",component:AddUserComponent, canDeactivate: [unSavedChangeGuard]},
  {path:"home", component:HomeComponent},
  {path:"users", canActivate:[AuthGuard], component:UsersComponent, },
  {path:"user/:id", component:UserComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AdminGuard],
    children:[
      {path:"",redirectTo:'address', pathMatch:"full"},
      {path:"address",component:AddressComponent},
      {path:"company",component:CompanyComponent}
    ]
  },
  {path:"about",component:AboutComponent,
    children:[
      {path:'location',outlet:'map',component:LocationComponent},
      {path:"feedbacks",outlet:'feeds', component:FeedbacksComponent}
    ]
  },
  {path:"contact",component:ContactComponent},
  {path:"**", redirectTo:"users",pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
