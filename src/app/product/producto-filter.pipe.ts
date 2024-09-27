import { Pipe, PipeTransform } from '@angular/core';
import{IProducto} from './producto';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {
  //se invoca a transform y le mencionamos que le pasaremos un arreglo y un string 
  //y me va a regresar una lista solo con ciertos campos que cumplen con la condicion dada

  transform(value: IProducto[],args: string): IProducto[] {

    //Recibe el string y lo convierte a miniscula , en caso de recibir un parametro vacio regresa un string vacio 
    
    let filter:string=args?args.toLocaleLowerCase():'';

    //Si el string llevaba parametros, esta funcion lo busca y regresa la lista con los parametros que coinciden con la condicion
    return filter? value.filter((product:IProducto)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1):value;
  }

}
