import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '../../app-animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('0.5s ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
  ]
})
export class MainComponent implements OnInit {
  itemSelected: string;
  items: any[];
  ruta: any;
  constructor(private router: Router) {
    this.itemSelected= 'Sobre mí'
    this.items = [{name:'Sobre mí', icon: '../../../assets/SobreMi.svg', path: 'about'},
    {name:'Proyectos', icon: '../../../assets/Proyectos.svg', path: 'proyectos'},
    {name:'Habilidades', icon: '../../../assets/Habilidades.svg', path: 'habilidades'},
    {name:'Idiomas', icon: '../../../assets/Curriculum.svg',path: 'idiomas'},
    {name:'Contacto', icon: '../../../assets/Contacto.svg', path: 'contacto'},
    ];
    this.ruta = this.router.url;
  }

  ngOnInit() {
      this.rollEyes();
  }


  rollEyes(){
    const eye1 = document.querySelector('.eye-left') as HTMLElement;
        const eye2 = document.querySelector('.eye-right') as HTMLElement;
        window.addEventListener('mousemove', (evt) => {
            const x = -(window.innerWidth / 2 - evt.pageX) / 160;
            const y = -(window.innerHeight / 2 - evt.pageY) / 160;
            eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
            eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
        });
  }

  setPart(item){
    this.itemSelected= item.name;
    this.ruta= '/main/'+ item.path;
  }


}
