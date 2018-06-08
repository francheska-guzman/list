import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class SongGuardService implements CanActivate {

  constructor(private _router: Router) { }

  // To ensure that the id is valid.
  canActivate(route: ActivatedRouteSnapshot): boolean {
  // + converts string to a number.
    let id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert("Invalid song id.");
      this._router.navigate(["/songs"]);
      return false;
    };
    return true;
  }
}
