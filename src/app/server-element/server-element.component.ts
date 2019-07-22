// By using view encapsulation setting it to none we can set the css globally

import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  OnDestroy,
  ContentChild,
  ɵConsole
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
 OnChanges,
 DoCheck, 
 AfterContentInit, 
 AfterContentChecked ,
 AfterViewInit, 
 AfterViewChecked,
 OnDestroy
 {
  @Input() element: { type: string, name: string, content: string } //to share the properties to the hosting component using @input ()
  @Input() name: String;
  @ViewChild("heading") heading : ElementRef;
  @ContentChild("paragraph") paragraph : ElementRef;

  constructor() {
    console.log("constructor is called !");
  }
  ngOnChanges(changes: SimpleChanges) {  //the method is hooked on every change
    console.log("ngOnChanges is called !");
    console.log(changes);
  }

  ngOnInit() {  // The life cycle method is hooked when the component is initialized
    console.log("ngOnInit is called ! ");
    console.log("Test content:" + this.heading.nativeElement.textContent);
    console.log("Text Content Paragraph :" + this.paragraph.nativeElement.textContent);
  }
  ngDoCheck() { //the method is hooked on every change detection run; when angular checks for any changes
    console.log("Do check is called !")
  }

  ngAfterContentInit() {  
    console.log("After content init initialised")
    console.log("Text Content Paragraph :" + this.paragraph.nativeElement.textContent);
   
  }
  ngAfterContentChecked() {  //method is hooked after the change detection occurs
    console.log("After content checked initialised")
  }
  ngAfterViewInit(){    // the method gives you access to the template elements after the view is initialised
    console.log("After View is initialised !!");
    console.log("Test content:" + this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked(){
    console.log("After View is checked !!");
  }
  ngOnDestroy(){
    console.log("On destroy method called !!");
  }
}
