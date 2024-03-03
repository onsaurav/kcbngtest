import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NewspannelComponent } from '../newspannel/newspannel.component';

@Component({
  selector: 'app-others',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NewspannelComponent],
  providers: [],
  templateUrl: './others.component.html',
  styleUrl: './others.component.css'
})
export class OthersComponent {
  title = 'KCB [ng] Test';
  myText: string = "";
  myTextWidth: number = 500;
  ratingNumber: number = 55;
  ratingValue: number = 110;

  calculateRatingValue(): void {
    this.ratingValue = Math.round(200 * (this.ratingNumber / 100));
  }
}
