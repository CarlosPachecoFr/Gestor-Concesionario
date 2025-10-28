import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DatosCochesService } from '../../../services/datos-coches.service';

@Component({
  selector: 'app-modal-editar',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-editar.component.html',
  styleUrl: './modal-editar.component.css'
})
export class ModalEditarComponent {

  @Output() cerrarModal = new EventEmitter<boolean>();
  formularioEditar: FormGroup;

  campos = [
    { label: 'Marca', control: 'marca', type: 'text', placeholder: 'Volkswagen' },
    { label: 'Modelo', control: 'modelo', type: 'text', placeholder: 'Golf' },
    { label: 'Año', control: 'anio', type: 'number', placeholder: '2021' },
    { label: 'Version', control: 'version', type: 'text', placeholder: 'GTI' },
    { label: 'Tipo de Carroceria', control: 'tipo_carroceria', type: 'text', placeholder: 'Hatchback' },
    { label: 'Motor', control: 'motor', type: 'text', placeholder: 'Gasolina' },
    { label: 'Cilindrada', control: 'cilindrada', type: 'number', placeholder: '2.0 L' },
    { label: 'Potencia en CV', control: 'potencia', type: 'number', placeholder: '200' },
    { label: 'Color', control: 'color', type: 'text', placeholder: 'Rojo' },
    { label: 'Precio', control: 'precio', type: 'number', placeholder: '30000' },
    { label: 'Fecha de Compra', control: 'fecha_compra', type: 'date', placeholder: '' },
    { label: 'Estado', control: 'estado', type: 'text', placeholder: 'Disponible' },
    { label: 'Notas', control: 'notas', type: 'text', placeholder: 'Muy popular entre clientes jóvenes' },
    { label: 'Matricula', control: 'matricula', type: 'text', placeholder: '1234ABC' },
    { label: 'Fecha de Venta', control: 'fecha_venta', type: 'date', placeholder: '' },
    { label: 'Puertas', control: 'puertas', type: 'number', placeholder: '5' },
    { label: 'Descripción', control: 'descripcion', type: 'text', placeholder: 'Coche en excelente estado' },
    { label: 'Kilometraje', control: 'kilometraje', type: 'number', placeholder: '15000' },
    { label: 'Imagen URL', control: 'img_url', type: 'text', placeholder: 'http://imagen.com/coche.jpg' }
  ];

  constructor(private formBuilder: FormBuilder, private datosCochesService: DatosCochesService) {
    this.formularioEditar = this.formBuilder.group({
      marca: [''],
      modelo: [''],
      anio: [''],
      version: [''],
      tipo_carroceria: [''],
      motor: [''],
      cilindrada: [''],
      potencia: [''],
      color: [''],
      precio: [''],
      fecha_compra: [''],
      estado: [''],
      notas: [''],
      matricula: [''],
      fecha_venta: [''],
      puertas: [''],
      descripcion: [''],
      kilometraje: [''],
      img_url: ['']
    });
  }

  onCerrar() {
    this.cerrarModal.emit(false);
  }

  editarCoche() {
    const id = localStorage.getItem('idCoche');
    this.datosCochesService.editarCoche(id ? id : '', this.formularioEditar.value).subscribe(() => {
      this.onCerrar();
      this.datosCochesService.notificarCambio();
    });
  }

}
