import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Food } from 'src/app/shared/models/Food';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { StarRatingComponent } from "../../partials/star-rating/star-rating.component";
import { CartService } from 'src/app/services/cart.service';

@Component({
    selector: 'app-food-page',
    standalone: true,
    templateUrl: './food-page.component.html',
    styleUrl: './food-page.component.css',
    imports: [CommonModule, StarRatingComponent, NgFor, RouterLink]
})
export class FoodPageComponent {
food!: Food;
constructor(activatedRoute: ActivatedRoute, foodService: FoodService,
  private cartService:CartService, private router:Router){
  activatedRoute.params.subscribe((params) => {
    if(params.id)
    this.food = foodService.getFoodById(params.id);
  })
}
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page');
}
}
