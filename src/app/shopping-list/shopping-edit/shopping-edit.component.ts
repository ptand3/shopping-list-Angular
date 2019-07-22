import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  ingredients = [];
  ingredientStatus ;
  ingName = ""



  constructor() { }

  ngOnInit() {
  }

  OnAddingIngredient() {
    console.log("added");
    this.ingredients.push(this.ingName);
    console.log(this.ingName);
    this.ingredientStatus = "Ingredient is created with :" + this.ingName;
  }


  OnUpdateIngredientName(event :Event){
    this.ingName = (<HTMLInputElement>event.target).value;
    // console.log(event);

  }

}
