import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'prueba-componente',
        loadChildren: () => import('./components/prueba-component/prueba.routes').then(m => m.PRUEBA_ROUTES)
    },
    {
        path: 'prueba-jenkins',
        loadChildren: () => import('./components/prueba-jenkins/prueba.routes').then(m => m.PRUEBA_ROUTES)
    }
];
