import { Component, OnInit, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>(); //creating a new custom event emiiter obj of blueprint EventEmitter class and assigning it to featureSelected proprty

  constructor() { }

  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    console.log("This is feature content !!!");
  }

}
