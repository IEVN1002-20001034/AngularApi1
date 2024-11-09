import{ Routes } from "@angular/router";
export default[
    {
        path:'listaalumnos',
        localComponent:()=>import('./alumnos/alumnos.component')
    },
    {
        path: 'agregar',
        loadComponent:()=>import('./agregar/agregar.component')
    }
]