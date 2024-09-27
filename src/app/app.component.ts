import { Component } from '@angular/core';

@Component({
  //nombre para referenciar el componente
  selector: 'app-root',
  //nombre del archivo html 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//se exporta la clase para usarla en el html
export class AppComponent {
  title = 'basesAngular';
  //funciones 
  duplicaNumero(x:number):number{
    return x*2;
  }

  alumno={
    nombre:'Juan',
    edad: 25 ,
    curso: 'Angular',
    fechaInscrito:new Date(),
    PagoInscripcion:2345
  }
}
