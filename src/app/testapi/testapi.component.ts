import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestService } from '../service/test.service';
import { Weather } from '../model/weather';

@Component({
  selector: 'app-testapi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [TestService],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css'
})
export class TestapiComponent {
  constructor(private testService: TestService){
    this.loadApiResult();
  }

  result: any;
  errorMessage: string = "";

  loadApiResult():void {
    this.testService.getApiResult().subscribe((result) => {
      this.result = result.data;
    });
  }



}
