import { Component } from '@angular/core';
import { TestService } from '../service/test.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testapi',
  standalone: true,
  imports: [],
  providers: [CommonModule, FormsModule, TestService],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css'
})
export class TestapiComponent {
  constructor(private testService: TestService){
    this.loadApiResult();
  }

  result: any = [];
  errorMessage: string = "";

  loadApiResult():void {
    this.result = this.testService.getApiResult().subscribe({
      next: data => this.result = data,
      error: err => this.errorMessage = err
    });
  }



}
