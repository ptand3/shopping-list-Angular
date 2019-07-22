import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) 
export class AppComponent {
  // title = 'app';
  loadedFeature ="recipes";
  serverElements = [{  //creating one object of the server element 
    type:"server",
    name :"TestServer",
    content:"This is a test"
  }];

  onServerAdded(serverData :{serverName :string ,serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBluePrintAdded(bluePrintData :{serverName :string ,serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    })
  }
  onChangedElement(){
    this.serverElements[0].name= "Changed !!"
  }
  onDestroyElement(){
    this.serverElements.splice(0,1);
  }

  onNavigate(feature:string){
   this.loadedFeature = feature;
   console.log(feature);
  }

}