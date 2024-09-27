import { Component } from '@angular/core';
import { IProducto } from '../producto';

//referencia del componente
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
    imageWidth:number=60;
      imageMargin:number=2;
      muestraImg:boolean=true;
      listFilter:string='';

      showImage():void{
        this.muestraImg=!this.muestraImg;
      }
    productos:IProducto[]=[
      
      
    {
      "productID" : 1,
      "Modelo": "Sentra",
      "Descripcion": "4 Puertas",
      "Year":"febrero 3 2020",
      "Precio": 97000,
      "Marca": "NISSAN",
      "Color":"Azul",
      "imagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_0c7166c16ff74073b65851f7f0b360ed.jpg"
    } ,
    {
      "productID" : 2,
      "Modelo": "A4",
      "Descripcion": "4 Puertas",
      "Year":"Marzo 3 2021",
      "Precio": 170000,
      "Marca": "AUDI",
      "Color":"Blanco",
      "imagenUrl":"https://api-subastalo.autodeal.mx/storage/marketplace/brand-new-vehicles/4a118f0345845e3cbd0a77168527c2e2.jpg"
    },
    {
      "productID" : 3,
      "Modelo": "Rio",
      "Descripcion": "2 Puertas",
      "Year":"Noviembre 6 2023",
      "Precio": 197000,
      "Marca": "Kia",
      "Color":"Rojo",
      "imagenUrl":"https://renting.kia.cl/1877-large_default/renting-autos-nuevos-kia-rio-5-ex-14l-6mt-ci-full.jpg"
    }
]
}
