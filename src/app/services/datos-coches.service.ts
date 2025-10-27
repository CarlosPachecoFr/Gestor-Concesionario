import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

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
}
