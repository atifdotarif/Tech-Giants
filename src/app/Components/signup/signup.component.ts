import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent implements OnInit{
  

  userObj: any = {
    userName: '',
    password: '',
  };
  ngOnInit(): void {
    // localStorage.removeItem('newUserName');

  }
  empty:boolean=false;
  router = inject(Router);
  SignUp() {
    if (this.userObj != null) {
      this.empty=true;
      localStorage.setItem('newUserName', this.userObj.userName);
      localStorage.setItem('newUserPassword', this.userObj.password);
      this.router.navigateByUrl('login');
    }
    else{
      this.empty=false;
    }
  }
}
