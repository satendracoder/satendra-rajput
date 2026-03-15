import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

interface RepositoryModel {
  title: string;
  visibility: string;
  description: string;
  platform: string;
  stars: number;
  forks: number;
  image: string;
  color: string;
}

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, DragDropModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  editMode = false; // customize toggle
  repositories: RepositoryModel[] = [
    {
      title: 'ADCB Loan Origination System',
      visibility: 'Private',
      description: 'Built configurable multi-step loan journeys in Angular integrated with Java Spring Boot APIs for end-to-end loan onboarding.',
      platform: 'Angular, Angular Material, Jira, Git, GitHub, Scrum',
      stars: 120,
      forks: 35,
      image: 'https://me.satendracoder.com/assets/images/projects/redmil_fintech/login.png',
      color: '#dd0031'
    },
    {
      title: 'Axis Bank Dealer LOS',
      visibility: 'Private',
      description: 'Developed dealer-focused loan origination flows, dashboards, and application tracking modules in Angular with backend integration.',
      platform: 'Angular, Angular Material, Jira, Spring Boot, MySQL',
      stars: 95,
      forks: 22,
      image: 'assets/projects/recharge.png',
      color: '#dd0031'
    },
    {
      title: 'Redmil FinTech Platform',
      visibility: 'Private',
      description: 'Developed a full-featured fintech web application supporting AEPS, Recharge, Bill Payments, Wallet Transactions, and Micro ATM services..',
      platform: ' Angular, Angular Material, REST APIs, JWT, RxJS',
      stars: 70,
      forks: 18,
      image: 'assets/projects/portfolio.png',
      color: '#dd0031'
    },
    {
      title: 'Redmil PPF (Paint Protection Film)',
      visibility: 'Private',
      description: 'Developed a dynamic Angular website for paint protection film services including car listings, product management, blogs, and admin dashboard.',
      platform: 'Angular, Angular Material, REST APIs, JWT, RxJS, GitHub, Postman',
      stars: 150,
      forks: 40,
      image: 'assets/projects/ui-library.png',
      color: '#dd0031'
    }
  ];

  constructor() { 
     const saved = localStorage.getItem('pinnedRepos');
    if (saved) {
      this.repositories = JSON.parse(saved);
    }
  }

  ngOnInit() {

  }
  drop(event: CdkDragDrop<RepositoryModel[]>) {
    moveItemInArray(this.repositories, event.previousIndex, event.currentIndex);

    localStorage.setItem('pinnedRepos', JSON.stringify(this.repositories));
  }
}
