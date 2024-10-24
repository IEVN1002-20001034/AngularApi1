import { Injectable } from '@angular/core';/*inyectarse en los componentes donde se vaya a usar el servicio */

@Injectable({
  providedIn: 'root'
})
export class MessageserviceService {

  constructor() { }
  alumnos:string[]=['a','b','c']

  add(alumnos: string){
    this.alumnos.push(alumnos)
  }
}
