import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  selectedProject: any = null;

projects = [
  {
    name: 'Kudo Engineer',
    client: 'E-Learning Platform',
    company: 'Own / Self',
    shortDesc: 'KudoEngineer is a modern developer learning platform focused on software engineering, interview preparation, and full stack development!',
    fullDesc: 'KudoEngineer is a modern developer learning platform focused on software engineering, interview preparation, and full stack development!',
    tech: ['Angular', 'Spring Boot', 'JWT', 'MySQL', 'Docker','GitHub','Postman'],
    features: [
      'Developer resources platform',
      'Blogging system',
      'Authentication with JWT',
      'Full-stack architecture'
    ]
  },
  {
    name: 'ADCB Loan Origination System',
    client: 'ADCB Bank',
    company: 'Vastika Technologies',
    shortDesc: 'Built configurable multi-step loan journeys in Angular integrated with Java Spring Boot APIs for end-to-end loan onboarding.',
    fullDesc: 'Built configurable multi-step loan journeys integrated with backend APIs for complete loan onboarding.',
    tech: ['Angular', 'Angular Material', 'Jira', 'Scrum','GitHub','Postman'],
    features: [
      'Dynamic loan journeys',
      'API integration',
      'Configurable workflows',
      'End-to-end onboarding'
    ]
  },
  {
    name: 'Axis Bank Dealer LOS',
    client: 'Axis Bank',
    company: 'Vastika Technologies',
    shortDesc: 'Developed dealer-focused loan origination flows, dashboards, and application tracking modules in Angular with backend integration.',
    fullDesc: 'Developed dealer-focused loan origination flows, dashboards, and tracking modules.',
    tech: ['Angular', 'Angular Material', 'Jira', 'Spring Boot', 'MySQL','GitHub','Postman'],
    features: [
      'Dealer dashboards',
      'Loan tracking',
      'Backend integration'
    ]
  },
  {
    name: 'Redmil FinTech Platform',
    client: 'Redmil',
    company: 'Redmil Business Mall',
    shortDesc: 'I have strong experience in the FinTech domain, working on systems like AEPS, Micro-ATM, Recharge, Bill Payments, and Loan Management.',
    fullDesc: 'Developed a full fintech system with authentication, dashboards, and API integrations.',
    tech: ['Angular','Angular Material', 'Spring Boot', 'JWT', 'RxJS','GitHub','Postman'],
    features: [
      'AEPS & Micro ATM',
      'Recharge & bill payment',
      'Secure login system',
      'Transaction dashboards'
    ]
  },
  {
    name: 'HDFC Loan CRM',
    client: 'HDFC',
    company: 'Redmil Business Mall',
    shortDesc: 'Built an Angular-based CRM for customer on-boarding, loan application workflows, and approval process with secure API integration.',
    fullDesc: 'Built CRM system for customer onboarding, loan workflows, and approvals.',
    tech: ['Angular','Angular Material', 'REST APIs', 'JWT', 'RxJS','GitHub','Postman'],
    features: [
      'Customer onboarding',
      'Loan workflow',
      'Approval system'
    ]
  },
  {
    name: 'PPF Website (Paint Protection Film)',
    client: 'Redmil',
    company: 'Redmil Business Mall',
    shortDesc: 'Developed a dynamic Angular website for paint protection film services including car listings, product management, blogs, and admin dashboard.',
    fullDesc: 'Developed Angular-based website with product management, blogs, and admin dashboard.',
    tech: ['Angular','Angular Material', 'REST APIs', 'JWT', 'RxJS','GitHub','Postman'],
    features: [
      'Car listing',
      'Product management',
      'Blog system',
      'Admin dashboard'
    ]
  }
];

openProject(project: any) {
  this.selectedProject = project;
}

closeProject() {
  this.selectedProject = null;
}
}
