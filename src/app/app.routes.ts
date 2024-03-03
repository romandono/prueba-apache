import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'prueba',
        loadChildren: () => import('../app/components/prueba-component/prueba.routes').then(m => m.PRUEBA_ROUTES)
    }
];
