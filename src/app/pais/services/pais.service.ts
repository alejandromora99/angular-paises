import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';
  private apiUrlRegion: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais( termino:string ): Observable<Country[]>{ //el get retorna un observable
    
    const url = `${this.apiUrl}/name/${ termino }`; //concateno la url con el termino
    return this.http.get<Country[]>(url); //hago la consulta a la api y la retorno
  }


  buscarCapital( termino:string ): Observable<Country[]>{ //el get retorna un observable
    
    const url = `${this.apiUrl}/capital/${ termino }`; //concateno la url con el termino
    return this.http.get<Country[]>(url); //hago la consulta a la api y la retorno
  }

  getPaisPorCca2( id:string ): Observable<Country>{ //el get retorna un observable
    
    const url = `${this.apiUrl}/alpha/${ id }`; //concateno la url con el termino
    return this.http.get<Country>(url); //hago la consulta a la api y la retorno
  }

  getPaisPorRegion( region:string ): Observable<Country[]>{ //el get retorna un observable
    
    const url = `${this.apiUrlRegion}/regionalbloc/${ region }`; //concateno la url con el termino
    return this.http.get<Country[]>(url); //hago la consulta a la api y la retorno
  }


}
