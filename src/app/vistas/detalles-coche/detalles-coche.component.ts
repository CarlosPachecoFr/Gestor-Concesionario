import { Component } from '@angular/core';
import { Coche, DatosCochesService } from '../../services/datos-coches.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalEditarComponent } from "../../componentes/modales/modal-editar/modal-editar.component";

@Component({
  selector: 'app-detalles-coche',
  imports: [ModalEditarComponent],
  templateUrl: './detalles-coche.component.html',
  styleUrl: './detalles-coche.component.css'
})
export class DetallesCocheComponent {

  datos1: any[] = [
    {
      img: '/assets/icons/calendario.svg',
      p1: 'Año',
      p2: ''
    },
    {
      img: '/assets/icons/kilometraje.png',
      p1: 'kilometraje',
      p2: ''
    },
    {
      img: '/assets/icons/motor.png',
      p1: 'Combustible',
      p2: ''
    },
    {
      img: '/assets/icons/transmision.png',
      p1: 'Transmisión',
      p2: ''
    }
  ]

  datos2: any[] = [
    {
      p1: 'Color:',
      p2: ''
    },
    {
      p1: 'Potencia:',
      p2: ''
    },
    {
      p1: 'Puertas:',
      p2: ''
    },
    {
      p1: 'Transmisión:',
      p2: ''
    }
  ]

  coche!: Coche;

  mostrarModalEditar: boolean = false;

  constructor(private datosCocheService: DatosCochesService, private router: Router, private route: ActivatedRoute) {}

  volverAInicio(){
    this.router.navigate(['']);
  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      localStorage.setItem('idCoche2', id);
    }
    this.cargarDatos();
    this.datosCocheService.datosActualizados$.subscribe(() => {
      this.cargarDatos();
    })
  }

  cargarDatos() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.datosCocheService.obtenerCocheId(id).subscribe((data: any) => {
      this.coche = data[0];
      this.datos1[0].p2 = data[0].anio;
      this.datos1[1].p2 = `${data[0].kilometraje} km`;
      this.datos1[2].p2 = data[0].motor;
      this.datos1[3].p2 = data[0].transmision;
      this.datos2[0].p2 = data[0].color;
      this.datos2[1].p2 = `${data[0].potencia_hp} CV`;
      this.datos2[2].p2 = data[0].puertas;
      this.datos2[3].p2 = data[0].transmision;
    })
  }

  abrirModalEditar() {
    this.mostrarModalEditar = true;
  }

  onCerrarModalEditar(valor: boolean) {
    this.mostrarModalEditar = valor;
  }

  eliminarCoche() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.datosCocheService.eliminarCoche(id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      }
    })
    this.datosCocheService.notificarCambio();
  }
}
