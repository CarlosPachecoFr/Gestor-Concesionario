import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";
import { GraficasDeDatosComponent } from "../../componentes/home/graficas-de-datos/graficas-de-datos.component";
import { MostrarInventarioComponent } from "../../componentes/home/mostrar-inventario/mostrar-inventario.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent, GraficasDeDatosComponent, MostrarInventarioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
