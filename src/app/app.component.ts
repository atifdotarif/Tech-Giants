import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from "./Components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgStyle, RouterLinkActive, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
