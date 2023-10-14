import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }

  verMateria() {
    this.router.navigate(['/materia']);
  }

  verHome() {
    this.router.navigate(['/']);
  }

  confirmDelete() {
    this.router.navigate(['/delete']);
  }
  
}
