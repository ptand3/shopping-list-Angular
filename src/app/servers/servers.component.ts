import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  // @Input() name;
  allowNewServer = false;
  serverName = "" ;
  serverCreatedStatus = false;
  servers = [ "Test Server , Test Server 2"];


  constructor() {

    setTimeout(() => {
      console.log("inside");
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000)

  }
  ngOnInit() {
  }
 
  OnCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreatedStatus = true;
    // this.serverCreateStatus = "Server is created ! with name :" + this.serverName;
    console.log("serverCreateStatus");
  }
  OnUpdateServerName(event :Event){
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event);

  }

  
}
