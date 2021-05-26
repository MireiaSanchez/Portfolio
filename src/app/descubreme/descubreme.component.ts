import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descubreme',
  templateUrl: './descubreme.component.html',
  styleUrls: ['./descubreme.component.scss']
})
export class DescubremeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var h1 = document.querySelector("h1");

h1.addEventListener("input", function() {
  this.setAttribute("data-heading", this.innerText);
});
  }

}
