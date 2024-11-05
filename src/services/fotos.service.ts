import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private rutaBase = '../assets/fotos/'; // Ajusta la ruta base según tu estructura
  private cantidadFotos = 65; // Ajusta la cantidad de fotos en tu rango

  constructor() {}

  obtenerFotos(): Observable<Foto[]> {
    const fotos: Foto[] = [];

    for (let i = 1; i <= this.cantidadFotos; i++) {
      const foto: Foto = {
        url: `${this.rutaBase}fotos (${i}).jpg`,
        descripcion: `Foto ${i}`
      };

      fotos.push(foto);
    }

    return of(fotos);
  }
}

export interface Foto {
  url: string;
  descripcion: string;
}
