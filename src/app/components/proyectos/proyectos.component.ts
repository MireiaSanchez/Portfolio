import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  projects: any[];
  selectedProject: any;
  video: any;
  fullscreen: boolean;
  player:any;

  constructor() {
    this.projects= [
      {img: '../../../assets/Recomerçem.PNG', name: 'Recomerçem', video: '../../../assets/Recomercem.mp4',
      description: 'Proyecto web para reavivar el comercio de barrio, animando a la gente a jugar a cuatro minijuegos con los que ganar puntos y cambiarlos por descuentos en tiendas. Primer proyeto del ciclo de Desarrollo de aplicaciones web.',
      technologies: ['html', 'css', 'javascript', 'php', 'bootstrap', 'mysql']
    },
      {img: '../../../assets/Broggi.PNG', name: 'Broggi', video: '../../../assets/Broggi.mp4',
      description: 'Proyecto web demandado por el instituto IES Moisès Broggi y segundo proyecto del cicle de Desarrollo de aplicaciones web. La aplicación está destinada a que los estudiantes practiquen la recepción de llamadas de emergencia, rellenando todos los datos proporcionados por el alertante y asignando los recursos necesarios.',
      technologies: ['html', 'css', 'javascript', 'php', 'laravel', 'bootstrap', 'mysql', 'vue']
    },
      {img: '../../../assets/TokyoHighlights.PNG', name: 'Tokyo Highlights', video: '../../../assets/TokyoHighlights.mp4',
      description: 'Primer contacto con el framework Angular. Aplicación de prueba simulando un blog con información sobre Tokio.',
      technologies: ['html', 'css', 'javascript', 'angular']
    },
      {img: '../../../assets/Kanjis.PNG', name: 'Learning Kanjis', video: '../../../assets/Kanjis.mp4',
      description: 'Primer contacto con el framework de Vue. Aplicación que, mediante la api Kanji Alive, muestra algunos kanjis de grado 5, usando diferentes colores de fondo según el número de trazos del kanji.',
      technologies: ['html', 'css', 'javascript', 'bootstrap', 'vue']
    }
    ]
    this.selectedProject= null;
    this.fullscreen= false;
  }

  ngOnInit(): void {

  }

  showDetail(project){
    this.selectedProject= project;
    this.video= document.querySelector('#myVideo') as HTMLElement;
  }

  changeProgress(event){
    let progressBar=document.querySelector('.progress-bar') as HTMLElement;
    // Adaptamos el % de barra pintada conforme avanza el video.
    progressBar.style.width= event.target.currentTime/event.target.duration *100 + '%'
}

toggleMute(){
  let muteIcon= document.querySelector('#muteIcon') as HTMLElement;
  this.video.muted = !this.video.muted;

  muteIcon.classList.contains('fa-volume-up') ? muteIcon.classList.replace('fa-volume-up', 'fa-volume-mute')
  : muteIcon.classList.replace('fa-volume-mute', 'fa-volume-up')
}

setProgress(event){
    // Dividimos el punto en el que hemos clicado entre el total del div.
    let progressRange= document.querySelector('.progress-range') as HTMLElement;
    let newTime= event.offsetX / progressRange.offsetWidth;
    let progressBar=document.querySelector('.progress-bar') as HTMLElement;
    // Cambiamos porcentaje de la barra
    progressBar.style.width= newTime * 100 + '%';
    // Cambiamos punto del video en el que estamos.
    this.video.currentTime= newTime * this.video.duration;
}

playVideo() {
  this.video= document.querySelector('#myVideo') as HTMLElement
  if (this.video.paused) this.video.play();

  document.querySelector(
    "#playButton"
  ).innerHTML = `<i class="fas fa-pause"></i>`;
  document
    .querySelector("#playButton")
    .removeEventListener("click", this.playVideo);
  document
    .querySelector("#playButton")
    .addEventListener("click", this.pauseVideo);
}

pauseVideo() {
  this.video= document.querySelector('#myVideo') as HTMLElement
  this.video.pause();

  document.querySelector(
    "#playButton"
  ).innerHTML = `<i class="fas fa-play"></i>`;
  document
    .querySelector("#playButton")
    .removeEventListener("click", this.pauseVideo);
  document
    .querySelector("#playButton")
    .addEventListener("click", this.playVideo);
}

toggleFullScreen(){
  this.player= document.querySelector('.player') as HTMLElement;
  !this.fullscreen ? this.openFullscreen(this.player) : this.closeFullscreen();
  this.fullscreen= !this.fullscreen;
}

/* View in fullscreen */
openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }

  this.player.classList.add('video-fullscreen');
}

// /* Close fullscreen */
closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document['webkitExitFullscreen']) { /* Safari */
    document['webkitExitFullscreen']();
  } else if (document['msExitFullscreen']) { /* IE11 */
    document['msExitFullscreen']();
  }

  this.player.classList.remove('video-fullscreen');
}

goBack(){
  this.selectedProject=null;
}

}
