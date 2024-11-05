import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent {
  totalImages = 104;
  images: string[] = [];
  selectedImage: string | null = null;
  selectedIndex: number = 0;

  constructor() {
    for (let i = 1; i <= this.totalImages; i++) {
      this.images.push(`../../../assets/fotos/foto (${i}).jpg`);
    }
  }

  openModal(imageUrl: string) {
    this.selectedImage = imageUrl;
    this.selectedIndex = this.images.indexOf(imageUrl);
    this.showModal();
  }

  prevImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
      this.selectedImage = this.images[this.selectedIndex];
    }
  }

  nextImage() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
      this.selectedImage = this.images[this.selectedIndex];
    }
  }

  closeModal() {
    this.selectedImage = null;
    var modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  

  private showModal() {
    var modal = document.getElementById("myModal");
    if (modal) {
      modal.style.display = "block";
    }
  }  
}
