import {Component, OnInit, EventEmitter ,Output, ElementRef, ViewChild , Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public messageGiven = new EventEmitter<string>(); 
  @Output()  themeSelected = new EventEmitter<string>(); 
  @Output() featureSelected = new EventEmitter<string>(); //creating a new custom event emiiter obj of blueprint EventEmitter class and assigning it to featureSelected proprty
//  @ViewChild(RecipeListComponent) child :RecipeListComponent;
  constructor(private renderer: Renderer2,private elementRef:ElementRef){ }
  message = "Hello World!";

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    console.log("This is feature content !!!");
  }

   onThemeChange(theme:string){
    this.themeSelected.emit(theme);
    console.log(theme);  
    } 

    showMessage(){
      this.messageGiven.emit(this.message);
      console.log("inside message");
    }

 
}
