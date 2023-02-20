import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { Capital } from '../../interfaces/capital.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css']
})
export class PaisTablaComponent {

  //recibo datos de paises desde el componente padre
  @Input () paises: Country [] = [];
  @Input () capitales: Capital [] = [];
}
