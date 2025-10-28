import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

export interface Coche {
  id: number,
  marca: string,
  modelo: string,
  anio: number,
  version: string,
  tipo_carroceria: string,
  motor: string,
  cilindrada: number,
  potencia_hp: number,
  color: string,
  precio: number,
  fecha_llegada: Date,
  estado: string,
  notas: string,
  matricula: string,
  fecha_venta: Date,
  puertas: number,
  descripcion: string,
  kilometraje: number
}

@Injectable({
  providedIn: 'root'
})
export class DatosCochesService {

  private apiUrl = environment.apiUrl;
  private datosActualizados = new Subject<void>();
  datosActualizados$ = this.datosActualizados.asObservable();

  constructor(private http: HttpClient) { }

  notificarCambio() {
    this.datosActualizados.next();
  }

  obtenerDatosTarjetas() {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-datos-tarjetas`);
  }

  obtenerDatosGraficosVentasMes() {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-datos-graficos-ventas-mes`)
  }

  obtenerDatosGraficosStockMarca() {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-datos-graficos-stock-marca`)
  }

  obtenerDatosBusqueda() {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-datos-busqueda`);
  }

  obtenerInventario() {
    return this.http.get<any[]>(`${this.apiUrl}/obtener-inventario`);
  }

  eliminarCoche(id: number) {
    return this.http.delete(`${this.apiUrl}/f0ad9c2d-e216-47bc-82a0-4a6101986a4c/eliminar-coche/${id}`);
  }

  editarCoche(id: string, coche: Coche) {
    return this.http.put(`${this.apiUrl}/7dfe20ec-d91d-4e87-8cef-ba02f3fd1334/editar-coche/${id}`, coche);
  }
}
