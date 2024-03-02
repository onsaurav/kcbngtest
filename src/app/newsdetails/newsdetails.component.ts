import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsdetails',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsdetails.component.html',
  styleUrl: './newsdetails.component.css'
})
export class NewsdetailsComponent {
  @Input() myMessages: string[] = [];
  @Output() sendCommentEvent = new EventEmitter<string>();
  
  txtComment: string = "";

  sendComment():void {    
    this.sendCommentEvent.emit(this.txtComment);
    this.txtComment = "";
  }
}
