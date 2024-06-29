import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingListForm') shoppingForm!: NgForm;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    console.log(this.shoppingForm.value);
    const ingredientName = this.shoppingForm.value.name;
    const ingredientAmount = this.shoppingForm.value.amount;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.slService.addIngredient(newIngredient);
  }
}
