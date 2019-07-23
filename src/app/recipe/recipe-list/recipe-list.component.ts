import { Component, OnInit, EventEmitter,Output,ViewChild, ElementRef, AfterViewInit,Renderer2} from '@angular/core';
import { Recipe } from '../recipe.model';
import { HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{
  // @ViewChild(HeaderComponent) header;
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 @ViewChild ('recipe-btn') recipeBtn : ElementRef;
  recipes: Recipe [] = [
  new Recipe('A Test recipe', "This is Simply a Test","../assets/image-recipe.jpeg"),
  new Recipe('Another recipe', "This is Simply a Test","../assets/image-recipe.jpeg")
  ]; //creating a recipes property of type script Recipe class which is an array of the properties created in the blueprint of Recipe class

  constructor() { }
  message:string;

  ngOnInit() {
    console.log("recipt list view initializsed");
  }
  // ngAfterViewInit() {
  //   console.log(this.header.message);
  //   // console.log("text content is :" + this.recipeBtn.nativeElement.textContent);
  //   console.log("After view initialised !");
    
  //   // console.log(this.child.message);
  // }

  OnRecipeSelected(recipe :Recipe){
   this.recipeWasSelected.emit((recipe));
  }
  changeColor(theme:string){
    console.log("welcome to recipe");
    // console.log(this.recipeBtn.nativeElement.text);
    
  }
 
 

}
