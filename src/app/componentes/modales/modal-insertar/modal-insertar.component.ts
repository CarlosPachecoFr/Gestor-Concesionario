import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatosCochesService } from '../../../services/datos-coches.service';

@Component({
  selector: 'app-modal-insertar',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-insertar.component.html',
  styleUrl: './modal-insertar.component.css'
})
export class ModalInsertarComponent {

  @Output() cerrarModal = new EventEmitter<boolean>();
  formularioAniadir: FormGroup;

  campos = [
    { label: 'Marca', control: 'marca', type: 'text', placeholder: 'Volkswagen' },
    { label: 'Modelo', control: 'modelo', type: 'text', placeholder: 'Golf' },
    { label: 'Año', control: 'anio', type: 'number', placeholder: '2021' },
    { label: 'Version', control: 'version', type: 'text', placeholder: 'GTI' },
    { label: 'Tipo de Carroceria', control: 'tipo_carroceria', type: 'text', placeholder: 'Hatchback' },
    { label: 'Motor', control: 'motor', type: 'text', placeholder: 'Gasolina' },
    { label: 'Cilindrada', control: 'cilindrada', type: 'text', placeholder: '2.0 L' },
    { label: 'Potencia en CV', control: 'potencia', type: 'number', placeholder: '200' },
    { label: 'Color', control: 'color', type: 'text', placeholder: 'Rojo' },
    { label: 'Precio', control: 'precio', type: 'number', placeholder: '30000' },
    { label: 'Fecha de Compra', control: 'fecha_compra', type: 'date', placeholder: '' },
    { label: 'Notas', control: 'notas', type: 'text', placeholder: 'Muy popular entre clientes jóvenes' },
    { label: 'Matricula', control: 'matricula', type: 'text', placeholder: '1234ABC' },
    { label: 'Puertas', control: 'puertas', type: 'number', placeholder: '5' },
    { label: 'Descripción', control: 'descripcion', type: 'text', placeholder: 'Coche en excelente estado' },
    { label: 'Kilometraje', control: 'kilometraje', type: 'number', placeholder: '15000' },
    { label: 'Imagen URL', control: 'img_url', type: 'text', placeholder: 'http://imagen.com/coche.jpg' }
  ];

  constructor(private formBuilder: FormBuilder, private datosCochesService: DatosCochesService) {
    this.formularioAniadir= this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      anio: ['', Validators.required],
      version: ['', Validators.required],
      tipo_carroceria: ['', Validators.required],
      motor: ['', Validators.required],
      cilindrada: ['', Validators.required],
      potencia: ['', Validators.required],
      color: ['', Validators.required],
      precio: ['', Validators.required],
      fecha_compra: ['', Validators.required],
      notas: [''],
      matricula: ['', Validators.required],
      puertas: ['', Validators.required],
      descripcion: [''],
      kilometraje: ['', Validators.required],
      img_url: ['', Validators.required]
    });
  }

  onCerrar() {
    this.cerrarModal.emit(false);
  }

  aniadirCoche() {
    if(this.formularioAniadir.valid) {
      this.datosCochesService.insertarCoche(this.formularioAniadir.value).subscribe(() => {
        this.onCerrar();
        this.datosCochesService.notificarCambio();
      })
    }
    else {
      this.formularioAniadir.markAllAsTouched();
    }
  }
}
