import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Notice it is imported from @angular/common/http instead of @angular/http
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.userService.getUser();
    const token = this.userService.getToken();
    if (currentUser && token) {
      return true;
    }
    // not logged in so redirect to login page with the return url
    return this.router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
  }
}
