import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent {
  constructor(private router: Router) { }

  verHome() {
    this.router.navigate(['/']);
  }
}
