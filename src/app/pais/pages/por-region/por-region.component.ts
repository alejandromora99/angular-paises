import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  constructor(private paisService: PaisService) {}
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];

  paises: Country[] = [];

  regionActiva: string = '';

  activarRegion(region: string) {

    if(region == this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getPaisPorRegion(region).subscribe({
      next: (v) => (this.paises = v),
    });
  }

  // buscarRegion(region:string): Observable <Country[]>{
  //   this.paisService.getPaisPorRegion(region).subscribe(
  //     {
  //       next: (v) => console.log(v),
  //     }
  //   );
  // }
}
