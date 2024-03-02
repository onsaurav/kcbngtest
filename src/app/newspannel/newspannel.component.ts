import { Component } from '@angular/core';
import { NewsdetailsComponent } from '../newsdetails/newsdetails.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newspannel',
  standalone: true,
  imports: [CommonModule, FormsModule, NewsdetailsComponent],
  templateUrl: './newspannel.component.html',
  styleUrl: './newspannel.component.css'
})
export class NewspannelComponent {
  messages: string[] = [];
  comments: string[] = [];
  txtMessage : string = "";

  addComment($event: string): void{
    this.comments.push($event);
  }
  
  addMessage(): void{
    this.messages.push(this.txtMessage);
    this.txtMessage = "";    
  }
}
