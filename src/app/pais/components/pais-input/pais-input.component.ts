import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  //Con output emitire un evento tipo string al componente padre (contendra el termino escrito)
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  debouncer: Subject<string> = new Subject(); // Subject es un observable que se puede crear de forma manual
  termino: string = '';

  ngOnInit(): void {
    //al momento que se cree el componente
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe((valor) => {
      // me subscribo al Subject (observer) llamado debouncer
      this.onDebounce.emit(valor); // se ejecutara cada vez que le pase un parametro al Subject
    });
  }
  buscar() {
    this.onEnter.emit(this.termino); // utilizo el Output onEnter creado arriba y emito el termino
  }

  teclaPresionada(event: any) {
    const valor = event.target.value;
    this.debouncer.next(this.termino); //le entrego el parametro al Subject
  }
}
