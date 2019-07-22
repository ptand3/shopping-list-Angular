import { Component, OnInit,Input, EventEmitter,Output} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;  //recieving the single recipe item values from the recipe list component
  @Output() recipeItemSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  OnSelect(){
    this.recipeItemSelected.emit();
    console.log("Single recipe item clicked !!")
  }

}
