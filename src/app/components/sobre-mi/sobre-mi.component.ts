import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  pageOne: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.pageOne= !this.pageOne;
  }
}
