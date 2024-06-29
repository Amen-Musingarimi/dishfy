import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('shoppingListForm') shoppingForm!: NgForm;

  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
      }
    );
  }

  onAddItem() {
    console.log(this.shoppingForm.value);
    const ingredientName = this.shoppingForm.value.name;
    const ingredientAmount = this.shoppingForm.value.amount;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
