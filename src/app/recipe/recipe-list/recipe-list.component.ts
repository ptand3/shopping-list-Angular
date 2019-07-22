import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
  new Recipe('A Test recipe', "This is Simply a Test","../assets/image-recipe.jpeg"),
  new Recipe('Another recipe', "This is Simply a Test","../assets/image-recipe.jpeg")
  ]; //creating a recipes property of type script Recipe class which is an array of the properties created in the blueprint of Recipe class

  constructor() { }

  ngOnInit() {
  }


  OnRecipeSelected(recipe :Recipe){
   this.recipeWasSelected.emit((recipe));
  }
}
