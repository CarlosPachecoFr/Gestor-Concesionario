import { Component } from '@angular/core';
import { DatosCochesService } from '../../../services/datos-coches.service';

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
      dato: '',
      subDato: ''
    },
    {
      id: 2,
      img: '/assets/icons/flechaArriba.svg',
      titulo: 'Coches Vendidos',
      dato: '',
      subDato: ''
    },
    {
      id: 3,
      img: '/assets/icons/bolsaDinero.svg',
      titulo: 'Ingresos Mensuales',
      dato: '',
      subDato: ''
    },
    {
      id: 4,
      img: '/assets/icons/cocheTarjeta.svg',
      titulo: 'Valor inventario',
      dato: '',
      subDato: ''
    }
  ]

  constructor(private datosCochesService: DatosCochesService) {}

  ngOnInit() {
    this.cargarDatosCoches();
  }

  cargarDatosCoches(){
    this.datosCochesService.obtenerCochesEnStock().subscribe(datos => {
      if (Array.isArray(datos) && datos.length > 0) {
      this.tarjetasCoches[0].dato = datos[0].total_coches;
      this.tarjetasCoches[0].subDato = `+${datos[1].añadidos_esta_semana} esta semana`;
      this.tarjetasCoches[1].dato = datos[2].vendidos_mes_actual;
      this.tarjetasCoches[1].subDato = datos[3].mensaje_porcentaje_vs_mes_anterior;
      this.tarjetasCoches[2].dato = `${datos[4].ingresos_mes_actual}€`;
      this.tarjetasCoches[2].subDato = datos[5].mensaje_porcentaje_vs_mes_anterior;
      this.tarjetasCoches[3].dato = `${datos[6].valor_inventario}€`;
      this.tarjetasCoches[3].subDato = datos[7].mensaje_variacion_valor_inventario;
    }
  });
  }
}
