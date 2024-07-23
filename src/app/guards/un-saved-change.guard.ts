import { Injectable } from '@angular/core';
import { CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from '../add-user/add-user.component';


export interface CanComponentLeave{
  canLeave:()=>boolean;
}


@Injectable({
  providedIn:'root'
})

export class unSavedChangeGuard implements CanDeactivate<CanComponentLeave>{
  canDeactivate(component:CanComponentLeave){
     if(component.canLeave){
      return component.canLeave()
     }
     return true;
  } 
}

  