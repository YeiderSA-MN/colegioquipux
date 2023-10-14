import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent {

  constructor(private router: Router) { }
  
  confirmar() {
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }

}
