import { Country } from '../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: bounter;
      }
    `
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false; // variable que partira como false y en caso de que haya error la cambiare a true
  paises: Country[] = [];
  paisesSugeridos:Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino; // debo pasarle el termino aca ya que en el 
    // formulario (que esta en el componente pais-input) lo guarda en una variable externa
    this.paisService.buscarPais(this.termino).subscribe({
      //todo observer debe tener un subscribe para poder recibir lo retornado
      next: (v) => this.paises = v,
      error: (e) => ((this.hayError = true), (this.paises = [])),
    });

  }

  sugerencias( termino:string ){
    this.hayError = false;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos = paises.splice(0,3));
  }
}
