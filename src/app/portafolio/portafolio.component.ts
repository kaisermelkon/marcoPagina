import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  pdfSrc = "assets/pdf/portafolio Social Media.pdf";
  page: number = 1;
  totalPages: any = 5;
  isLoaded: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  afterLoadComplete(pdfData: any) {
    console.log(pdfData._pdfInfo.numPages)
    this.totalPages = pdfData._pdfInfo.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }

}
