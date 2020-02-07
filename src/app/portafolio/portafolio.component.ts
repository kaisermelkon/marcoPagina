import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  //Archivo local de pdf
  pdfSrc = "assets/pdf/portafolio Social Media.pdf";

  constructor() { }

  ngOnInit() {
  }

}
