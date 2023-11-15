import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from 'src/app/shared/models/Tag';
import { FoodService } from 'src/app/services/food.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  tags?:Tag[];
  constructor(foodService:FoodService) {
    this.tags = foodService.getAllTags();
   }
}
