import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosCochesService } from '../../../services/datos-coches.service';

@Component({
  selector: 'app-mostrar-inventario',
  imports: [ReactiveFormsModule],
  templateUrl: './mostrar-inventario.component.html',
  styleUrl: './mostrar-inventario.component.css'
})
export class MostrarInventarioComponent {

  marcas: string[] = [];
  formularioBusqueda: FormGroup;

  constructor(private formBuilder: FormBuilder, private datosCochesService: DatosCochesService) {
    this.formularioBusqueda = this.formBuilder.group({
      textoBusqueda: [''],
      marca: ['todasMarcas'],
      estado: ['todosEstados'],
      precio: ['todosPrecios']
    })
  }

  ngOnInit() {
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    this.datosCochesService.obtenerDatosBusqueda().subscribe(datos => {
      this.marcas = datos.map(dato => dato.marca).filter((valor, indice, self) => self.indexOf(valor) === indice);
    })
  }
}
