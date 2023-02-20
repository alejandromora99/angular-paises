import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false; // variable que partira como false y en caso de que haya error la cambiare a true
  paises: Country[] = [];
  constructor(private paisService: PaisService) {}

  buscar(termino:string) {
    this.hayError = false;
    this.termino = termino; // debo pasarle el termino aca ya que en el 
    // formulario (que esta en el componente pais-input) lo guarda en una variable externa
    this.paisService.buscarCapital(this.termino).subscribe({
      //todo observer debe tener un subscribe para poder recibir lo retornado
      next: (v) => this.paises = v,
      error: (e) => ((this.hayError = true), (this.paises = [])),
    });

  }

  sugerencias( termino:string ){
    this.hayError = false;
    
  }

}
