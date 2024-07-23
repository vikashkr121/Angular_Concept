import { inject, Injectable } from '@angular/core';
import { CanActivateChildFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn:'root'
})

export class AdminGuard implements CanActivateChild{
  canActivateChild (){
      return true;
  }
}

  