import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-articulos',
  templateUrl: './admin-articulos.component.html',
  styleUrls: ['./admin-articulos.component.css']
})
export class AdminArticulosComponent implements OnInit {

  public model;
  public articles=[];

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log("model",this.model)
    this.articles.push(this.model);
    this.model=""
    console.log(this.articles)
    
  }

}
