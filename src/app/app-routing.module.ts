import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '', //ruta raiz
        component: PorPaisComponent,
        pathMatch: 'full' // indico que la ruta debe ser exacta para mostrar este componente
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', //le digo que recibira un argumento de forma dinamica, que sera el identificador del pais
        component: VerPaisComponent
    },
    {//Ruta en caso que escriba alguna ruta que no exista
        path: '**',
        redirectTo: ''
    }
]

@NgModule({ // Para exportar las rutas al proyecto
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}