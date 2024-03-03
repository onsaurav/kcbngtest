import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css',
})
export class ItemComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  itemId: number = 0;

  ngOnInit(): void {
    this.itemId = Number(this.route.snapshot.paramMap.get("id"));
  }
}
