import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', title:'Satendra | Sr. Angular Developer | Full Stack Developer(Angular + Java)', loadComponent: () => import('./components/overview/overview.component').then(m => m.OverviewComponent)},
    {path: 'about', title:'About us | Satendra Rajput', loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent)},
    {path: 'experience', title:'Experience | Satendra Rajput', loadComponent:()=> import('./components/experience/experience.component').then(m=>m.ExperienceComponent)},
];
