import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raff',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './raff.component.html',
  styleUrl: './raff.component.css'
})
export class RaffComponent {
  constructor(private router: Router) {

  }

  itemNo: number = 1;

  gotoItem(): void {
    this.router.navigate(['/items', this.itemNo]);
  }
}
