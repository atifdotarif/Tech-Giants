import { Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { RouterOutlet,RouterLink, RouterLinkActive, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgStyle,RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  public title = 'TechGiant';
  public isOpen: boolean = false;
  // public width: string = 

  public mouseOver(): void {
    this.isOpen = true
  }

  public mouseOut(): void {
    this.isOpen = false
  }
  router=inject(Router);
  logout(){
    localStorage.removeItem('UserInfo');
    this.router.navigateByUrl('login');
  }
}
