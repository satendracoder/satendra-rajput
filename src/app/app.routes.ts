import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', title: 'Satendra | Sr. Angular Developer | Full Stack Developer(Angular + Java)', loadComponent: () => import('./components/overview/overview.component').then(m => m.OverviewComponent) },
    { path: 'about', title: 'About us | Satendra Rajput', loadComponent: () => import('./components/about-us/about-us.component').then(m => m.AboutUsComponent) },
    { path: 'experience', title: 'Experience | Satendra Rajput', loadComponent: () => import('./components/experience/experience.component').then(m => m.ExperienceComponent) },
    { path: 'packages', title: 'Packages Details | Satendra Rajput', loadComponent: () => import('./components/packages/packages.component').then(m => m.PackagesComponent) },
    { path: 'projects', title: 'Projects Details | Satendra Rajput', loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent) },
    { path: 'skills', title: 'Skills Details | Satendra Rajput', loadComponent: () => import('./components/skills/skills.component').then(m => m.SkillsComponent) }
    ,{ path: 'contact-us', title: 'Contact US | Satendra Rajput', loadComponent: () => import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent) }

];
