import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let isAuthenticated: boolean = false;
    this.authService.getAuthStatusListener().pipe(first()).subscribe(status => isAuthenticated = status);
    if (!isAuthenticated) {
      this.router.navigate(['/auth/login']);
    }
    return isAuthenticated;
  }
}
