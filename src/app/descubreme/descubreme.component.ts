import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descubreme',
  templateUrl: './descubreme.component.html',
  styleUrls: ['./descubreme.component.scss']
})
export class DescubremeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  onClick(){
    this.router.navigate(['main/about']);
  }

}
