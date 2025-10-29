import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosCochesService } from '../../../services/datos-coches.service';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from "../../modales/modal-editar/modal-editar.component";
import { ModalInsertarComponent } from "../../modales/modal-insertar/modal-insertar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-inventario',
  imports: [ReactiveFormsModule, CommonModule, ModalEditarComponent, ModalInsertarComponent],
  templateUrl: './mostrar-inventario.component.html',
  styleUrl: './mostrar-inventario.component.css'
})
export class MostrarInventarioComponent {

  marcas: string[] = [];
  coches: any[] = [];
  cochesFiltrados: any[] = [];
  mostrarModalEditar: boolean = false;
  mostrarModalAniadir: boolean = false;
  formularioBusqueda: FormGroup;

  constructor(private formBuilder: FormBuilder, private datosCochesService: DatosCochesService, private router: Router) {
    this.formularioBusqueda = this.formBuilder.group({
      textoBusqueda: [''],
      marca: ['todasMarcas'],
      estado: ['todosEstados'],
      precio: ['todosPrecios']
    })
  }

  ngOnInit() {
    this.obtenerCoches();
    this.obtenerMarcas();
    this.formularioBusqueda.valueChanges.subscribe(() => {
        this.filtrarCoches();
    });
    this.datosCochesService.datosActualizados$.subscribe(() => {
      this.obtenerMarcas();
      this.obtenerCoches();
      this.formularioBusqueda.valueChanges.subscribe(() => {
        this.filtrarCoches();
      });
    });
  }

  obtenerMarcas() {
    this.datosCochesService.obtenerDatosBusqueda().subscribe(datos => {
      this.marcas = datos.map(dato => dato.marca).filter((valor, indice, self) => self.indexOf(valor) === indice);
    })
  }

  obtenerCoches() {
    this.datosCochesService.obtenerInventario().subscribe(datos => {
      this.coches = datos;
      this.cochesFiltrados = datos;
    });
  }

  filtrarCoches() {
    const { textoBusqueda, marca, estado, precio } = this.formularioBusqueda.value;

    this.cochesFiltrados = this.coches.filter(coche => {
    const coincideTexto =
      !textoBusqueda ||
      coche.modelo.toLowerCase().includes(textoBusqueda.toLowerCase());

    const coincideMarca =
      marca === 'todasMarcas' || coche.marca === marca;

    const coincideEstado =
      estado === 'todosEstados' || coche.estado === estado;

    let coincidePrecio = true;
    switch (precio) {
      case 'Bajo':
        coincidePrecio = coche.precio < 20000;
        break;
      case 'MedioBajo':
        coincidePrecio = coche.precio >= 20000 && coche.precio < 40000;
        break;
      case 'MedioAlto':
        coincidePrecio = coche.precio >= 40000 && coche.precio < 60000;
        break;
      case 'Alto':
        coincidePrecio = coche.precio >= 60000;
        break;
    }

    return coincideTexto && coincideMarca && coincideEstado && coincidePrecio;
  });
  }

  eliminarCoche(id: number) {
    this.datosCochesService.notificarCambio();
    this.datosCochesService.eliminarCoche(id).subscribe({
      next: () => {
        this.coches = this.coches.filter(coche => coche.id !== id);
        this.filtrarCoches();
      },
    });
  }

  abrirModalEditar(id: number) {
    this.mostrarModalEditar = true;
    localStorage.setItem('idCoche', id.toString());
  }

  onCerrarModalEditar(valor: boolean) {
    this.mostrarModalEditar = valor;
  }

  abrirModalAniadir() {
    this.mostrarModalAniadir = true;
  }

  onCerrarModalAniadir(valor: boolean) {
    this.mostrarModalAniadir = valor;
  }

  verInfoCoche(id: number) {
    this.router.navigate(['/detalles-coche', id]);
  }
}
