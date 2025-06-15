import { Routes } from '@angular/router';
import { TablaComponent } from './components/tabla/tabla.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [

    {
        path: 'tabla',
        component: TablaComponent,
    },
    {
        path: 'formulario',
        component: FormularioComponent,
    },
    {
        path: '',
        component: InicioComponent,
    }
];
