import { Component } from '@angular/core';
import { NgApexchartsModule, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle, ApexResponsive, ApexStroke, ApexFill, ApexYAxis, ApexGrid, ApexMarkers, ApexTooltip, ApexDataLabels, ApexPlotOptions } from 'ng-apexcharts';
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

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  stroke: ApexStroke;
  markers: ApexMarkers;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-graficas-de-datos',
  imports: [NgApexchartsModule],
  templateUrl: './graficas-de-datos.component.html',
  styleUrl: './graficas-de-datos.component.css'
})
export class GraficasDeDatosComponent {
  public chartOptions!: ChartOptions;
  public barChartOptions!: BarChartOptions;

  constructor(private datosCochesService: DatosCochesService) {}

  ngOnInit() {
    this.cargarDatosArea();
    this.cargarDatosBarras();
  }

  cargarDatosArea() {
    this.datosCochesService.obtenerDatosGraficosVentasMes().subscribe(data => {
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
          style: { fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF' }
        },
        subtitle: {
          text: 'Evolución de ventas en los últimos 6 meses',
          align: 'left',
          floating: false,
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

  cargarDatosBarras() {
    this.datosCochesService.obtenerDatosGraficosStockMarca().subscribe(data => {
      const marcas = data.map((item: any) => item.marca);
      const stock = data.map((item: any) => item.stock);

      this.barChartOptions = {
      series: [{
        name: 'Stock',
        data: stock,
        color: '#3B82F6'
      }],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: { show: false },
        background: 'transparent',
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          horizontal: false,
        },
      },
      dataLabels: { enabled: false },
      tooltip: {
        y: {
          formatter: (value: number) => `${value}`
        }
      },
      grid: { show: false },
      xaxis: {
        categories: marcas,
        labels: { style: { colors: '#FFFFFF', fontSize: '14px' } }
      },
      yaxis: { labels: { style: { colors: '#FFFFFF', fontSize: '14px' } } },
      stroke: { show: true, width: 0 },
      markers: { size: 0 },
      title: { text: 'Stock por Marca', style: { fontSize: '16px', fontWeight: 'bold', color: '#FFFFFF' } },
      subtitle: { text: 'Distribución actual del inventario', align: 'left', style: { fontSize: '14px', color: '#A1A1A1', fontWeight: 'normal' } }
    };


    })
  }

}
