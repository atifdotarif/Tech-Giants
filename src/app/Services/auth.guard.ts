import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);
  const email=localStorage.getItem('UserInfo');
  console.log(!email)
  if(email==null){
    router.navigateByUrl('login');
    return false;
  }
    return true;
};
