import { HttpClient } from '@angular/common/http';
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

  ngOnInit(): void {
    // localStorage.removeItem('newUserName');

  }
  empty:boolean=false;
  
  SignUp() {
    const newUser = {
      email: this.obj.email,
      password: this.obj.password,
      city: this.obj.city,
      phoneNumber: this.obj.phoneNumber,
    };
  
    this.http.post('http://localhost:5148/api/users', newUser).subscribe(
      (response: any) => {
        // Handle the response from the server (e.g., success message)
        alert('Signup Successful');
      
        localStorage.setItem('status','success');
        this.router.navigateByUrl('login'); // Redirect to login page after signup
      },
      (error) => {
        console.error('Error during signup:', error);
        alert('An error occurred during signup. Please try again later.');
      }
    );
  }
  
  // SignUp() {
  //   if (this.obj != null) {
  //     this.empty=true;
  //     this.http.post()
  //     // localStorage.setItem('newUserName', this.obj);
  //     // localStorage.setItem('newUserPassword', this.userObj.password);
  //     this.router.navigateByUrl('login');
  //   }
  //   else{
  //     this.empty=false;
  //   }
  // }
}
