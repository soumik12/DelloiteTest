import { Component } from '@angular/core';
import { HttpClient } from  "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'furnitureshop';
  furnitureArr:any = [];
  constructor( public http:HttpClient){
    this.getFurnitureList();
  }
  getFurnitureList(){
    this.http.get('assets/allFurnitures.json',  { observe: 'body' }).subscribe(result => {
      console.log(result);
      this.furnitureArr = result;
    });
  }
}
