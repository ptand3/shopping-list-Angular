import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showMessage($event:string){ 
    debugger;
    console.log("inside reciept component")
  }

}
