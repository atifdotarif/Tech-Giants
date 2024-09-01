import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ServicesComponent } from './Components/services/services.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './Services/auth.guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch: "full"
    },
    {
        path:'login',
        loadComponent:()=>import('./Components/login/login.component').then(m=>m.LoginComponent),
        title:'Tech Giants'
    },
    {
        path:'signup',
        loadComponent:()=>import('./Components/signup/signup.component').then(m=>m.SignupComponent),
    },
    {
        path:'',
        loadComponent:()=>import('./Components/layout/layout.component').then(m=>m.LayoutComponent),
        canActivate:[authGuard],
        children: [
            {
                path:'Home',
                loadComponent:()=>import('./Components/home/home.component').then(m=>m.HomeComponent),
                canActivate:[authGuard],
                title:'Home'
            },
            {
                path:'Services',
                loadComponent:()=>import('./Components/services/services.component').then(m=>m.ServicesComponent),
                canActivate:[authGuard],
                title:'Services'
            },
            {
                path:'About',
                loadComponent:()=>import('./Components/about/about.component').then(m=>m.AboutComponent),
                canActivate:[authGuard],
                title:'About'
            },
            {
                path:'Contact',
                loadComponent:()=>import('./Components/contact/contact.component').then(m=>m.ContactComponent),
                canActivate:[authGuard],
                title:'Contact'
            },
        ]
    },
];
