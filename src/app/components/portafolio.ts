import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  templateUrl: './portafolio.html',
  styleUrls: ['./portafolio.css']
})
export class PortafolioComponent {
  currentYear: number = new Date().getFullYear();
  menuAbierto: boolean = false;

  constructor() {}

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  navegarA(seccion: string): void {
    const elemento = document.getElementById(seccion);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.menuAbierto = false;
  }
}
