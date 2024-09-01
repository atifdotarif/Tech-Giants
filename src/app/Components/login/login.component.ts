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

  userObj:any={
    userName:'',
    password:''
  }
  http=inject(HttpClient)
  router=inject(Router);
  // Login(){
  //   this.http.post('https://projectapi.gerasim.in/api/UserApp/login',this.userObj).subscribe((res:any)=>{
  //     if(res.result){
  //       alert("login Success");
  //       localStorage.setItem('UserInfo',this.userObj.userName)
  //       this.router.navigateByUrl('home');
  //     }
  //     else{
  //       alert(res.message);
  //     }
  //   })
  // }
  Login(){
    if(this.userObj.userName=='admin'&&this.userObj.password=='123'){
            alert("login Success");
            localStorage.setItem('UserInfo',this.userObj.userName)
            this.router.navigateByUrl('Home');
          }
          else{
            alert('login fail')
          }
  }
  

  
}
