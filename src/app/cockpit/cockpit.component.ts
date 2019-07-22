// Inorder to call the cockpit component events we call the constructor to 
// create new EventEmiiter object to make properties to events that will deliver the events
// @ViewChild we can access the DOM elements from the template

import { Component, OnInit, EventEmitter,Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss']
})
export class CockpitComponent implements OnInit {
   @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
   @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  // newServerName = ""
  // newServerContent = "",
 @ViewChild("serverContentInput") serverContentInput:ElementRef

  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput) {   
    this.serverCreated.emit({
      // serverName: this.newServerName, 
      serverName : nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
     })
  }

  onAddBluePrint(nameInput) {
    this. blueprintCreated.emit({ 
      // serverName: this.newServerName, 
      serverName : nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
      // serverContent : contentInput.value
     
    })
  }
}

