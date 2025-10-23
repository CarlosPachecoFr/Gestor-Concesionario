import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/comunes/header/header.component";
import { TarjetasDatosComponent } from "../../componentes/home/tarjetas-datos/tarjetas-datos.component";

@Component({
  selector: 'app-home',
  imports: [TarjetasDatosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
