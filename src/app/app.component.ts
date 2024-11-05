import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images = [
    { src: '../assets/portada01.jpg', alt: 'portada1' },
    { src: '../assets/portada02.jpg', alt: 'portada2' },
    { src: '../assets/portada03.jpg', alt: 'portada3' }
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startSlideShow();
    this.isMobileView = this.checkIfMobile(); // Verificar si es una vista móvil al cargar la página
  }

  startSlideShow() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Cambiar cada 3 segundos (3000 ms)
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  stopSlideShow() {
    clearInterval(this.interval);
  }

  showSubmenu: boolean = false;

  toggleSubmenu(): void {
    this.showSubmenu = !this.showSubmenu; // Alternar el estado del submenu al hacer clic
  }

  isMenuOpen: boolean = false;
  isMobileView: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobileView = window.innerWidth < 768;
  }

  checkIfMobile(): boolean {
    return window.innerWidth < 768;
  }
}
