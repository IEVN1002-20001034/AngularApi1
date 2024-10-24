import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styles: ``
})
export class TemahComponent {
 @Input() mensaje!: string; /*Propiedad de entrada*/

 @Output() mensaje2 = new EventEmitter<string>();
/*metodo que responda el mensaje */
 enviarMensaje(){
  this.mensaje2.emit('Hola mundo desde HIJO');
 }
}
