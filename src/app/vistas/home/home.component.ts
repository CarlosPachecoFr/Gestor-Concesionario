import { Component } from '@angular/core';
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";
import { GraficasDeDatosComponent } from "../../componentes/home/graficas-de-datos/graficas-de-datos.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent, GraficasDeDatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
