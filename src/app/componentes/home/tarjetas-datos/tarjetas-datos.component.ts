import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas-datos',
  imports: [],
  templateUrl: './tarjetas-datos.component.html',
  styleUrl: './tarjetas-datos.component.css'
})
export class TarjetasDatosComponent {
  
  tarjetasCoches: any[] = [
    {
      id: 1,
      img: '/assets/icons/box.svg',
      titulo: 'Coches en Stock',
      dato: '47',
      subDato: '+3 esta semana'
    },
    {
      id: 2,
      img: '/assets/icons/flechaArriba.svg',
      titulo: 'Coches Vendidos',
      dato: '23',
      subDato: '+12% vs mes anterior'
    },
    {
      id: 3,
      img: '/assets/icons/bolsaDinero.svg',
      titulo: 'Ingresos Mensuales',
      dato: '€145k',
      subDato: '+6% vs mes anterior'
    },
    {
      id: 4,
      img: '/assets/icons/cocheTarjeta.svg',
      titulo: 'Valor inventario',
      dato: '€1.8M',
      subDato: '+5.2% este mes'
    }
  ]

  constructor() {}

}
