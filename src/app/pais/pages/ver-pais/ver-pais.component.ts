import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit{

  pais!: Country ;

  constructor(
    private activatedRoute: ActivatedRoute, // con esto podemos acceder al parametro que esta recibiendo la ruta 
    private PaisService: PaisService
    ){}
  
  
  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(param => this.PaisService.getPaisPorCca2(param['id'])),
        tap(resp => {
          console.log(resp);
        }) // console log rapido (imprime lo que retorna switchMap)
      )
      .subscribe(pais => {
        this.pais = pais;
      })



    // this.activatedRoute.params
    //   .subscribe(params => { // al ser un obserber debo suscribirme para obtener los datos
    //     this.PaisService.getPaisPorCca2(params['id'])
    //     .subscribe(pais => {
    //       console.log(pais);
    //     })
    //   });
  }

  
}
