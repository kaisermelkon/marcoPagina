import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  //Archivo local de pdf
  pdfSrc = "assets/pdf/servicios.pdf";

  constructor() { }

  ngOnInit() {
  }

}
