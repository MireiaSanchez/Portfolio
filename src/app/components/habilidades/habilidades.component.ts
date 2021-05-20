import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {

  sections: string[];
  selectedSection: string;

  constructor() {
    this.sections= ['Front-end', 'Back-end', 'Otros']
    this.selectedSection= 'Front-end';
   }

  ngOnInit(): void {

  }

  setSection(item){
    this.selectedSection= item;
  }



}
