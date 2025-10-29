import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./vistas/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'detalles-coche/:id',
        loadComponent: () => import('./vistas/detalles-coche/detalles-coche.component').then(m => m.DetallesCocheComponent)
    }
];
