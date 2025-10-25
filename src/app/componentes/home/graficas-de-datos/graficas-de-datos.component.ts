import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexStroke, ApexFill, ApexYAxis, ApexGrid } from 'ng-apexcharts';
import { DatosCochesService } from '../../../services/datos-coches.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-graficas-de-datos',
  imports: [NgApexchartsModule],
  templateUrl: './graficas-de-datos.component.html',
  styleUrl: './graficas-de-datos.component.css'
})
export class GraficasDeDatosComponent {
  public chartOptions!: ChartOptions;

  constructor(private datosCochesService: DatosCochesService) {}

  ngOnInit() {
    this.cargarDatosArea();
  }

  cargarDatosArea() {
    this.datosCochesService.obtenerDatosGraficos().subscribe(data => {
      const meses = data.map((item: any) => item.mes);
    const ventas = data.map((item: any) => item.vendidos);

      this.chartOptions = {
        series: [
          {
            name: 'Ventas',
            data: ventas, // o [1,2,3] para pruebas
            color: '#3B82F6'
          }
        ],
        chart: {
          type: 'area',
          height: 400,
          stacked: false,
          toolbar: { show: false },
          background: 'transparent' // fondo transparente
        },
        stroke: { curve: 'smooth', width: 2 },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#3B82F6'],
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 100]
          }
        },
        title: {
          text: 'Ventas Mensuales',
          style: { fontSize: '20px', fontWeight: 'bold', color: '#FFFFFF' }
        },
        subtitle: {
          text: 'Evolución de ventas en los últimos 6 meses',
          align: 'left',
          floating: false,
          offsetY: 35,         // posición debajo del título
          style: { fontSize: '14px', fontWeight: 'normal', color: '#A1A1A1' }
        },
        xaxis: {
          categories: meses, // ['Enero', 'Febrero', ...]
          labels: { style: { colors: '#FFFFFF' } },
          crosshairs: { 
            show: false,
            width: 0
          }
        },
        yaxis: {
          labels: { style: { colors: '#FFFFFF' } }
        },
        grid: {
          show: false 
        },
        responsive: [
          {
            breakpoint: 640,
            options: {
              title: { style: { fontSize: '16px' } },
              legend: { fontSize: '10px' }
            }
          }
        ]
      };


    })
  }

}
