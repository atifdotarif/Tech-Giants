import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
ngOnInit(): void {
 localStorage.setItem('status','fail');
  
}
  userObj: any = {
    userName: '',
    password: '',
  };
  obj: any = {
    id: null,
    email: '',
    password: '',
    city: '',
    phoneNumber: null,
  };
  email: string = '';
  password: string = '';
  http = inject(HttpClient);
  router = inject(Router);

  Login() {
    this.http.get('http://localhost:5148/api/users').subscribe((users: any) => {
      let isAuthenticated = false;
      this.obj=users;
      
      for (const user of users) {
        if (user.email === this.userObj.userName && user.password === this.userObj.password) {
          isAuthenticated = true;
          alert('Login Success');
          // localStorage.setItem('UserInfo', this.userObj.userName);
          localStorage.setItem('status','success');
          this.router.navigateByUrl('Home');
          break;
        }
      }
  
      if (!isAuthenticated) {
      localStorage.setItem('status','fail');
        alert('Login Failed: Incorrect Username or Password');
      }
    }, error => {
      console.error('Error fetching users:', error);
      alert('An error occurred while logging in. Please try again later.');
    });
  } 

  
}
