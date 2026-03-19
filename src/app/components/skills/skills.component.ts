import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      category: 'Frontend',
      items: [
        'Angular 14–18', 'RxJS', 'TypeScript', 'JavaScript',
        'HTML5', 'CSS3', 'SCSS', 'Angular Material',
        'Bootstrap', 'Tailwind'
      ]
    },
    {
      category: 'Backend',
      items: [
        'Java', 'Spring Boot', 'REST APIs', 'JWT Authentication'
      ]
    },
    {
      category: 'Database',
      items: ['MySQL']
    },
    {
      category: 'DevOps / CI-CD',
      items: ['Jenkins', 'GitHub Actions', 'Docker']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code']
    },
    {
      category: 'Project Management',
      items: ['Jira', 'Scrum', 'Microsoft Teams']
    },
    {
      category: 'Other',
      items: ['PWA', 'TWA', 'Device SDK', 'Mantra Bio', 'Micro-ATM']
    },
    {
      category: 'Concepts',
      items: [
        'Reactive Forms', 'Lazy Loading', 'Module Splitting',
        'Interceptors', 'RBAC', 'Reusable Components'
      ]
    }
  ];
}
