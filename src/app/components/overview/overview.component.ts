import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { isPlatformBrowser } from '@angular/common';

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
  imports: [
    CommonModule,
    DragDropModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  editMode = false; // customize toggle
  websiteUrl = 'https://kudoengineer.com';

  repositories: RepositoryModel[] = [
    {
      title: 'ADCB Loan Origination System',
      visibility: 'Private',
      description:
        'Built configurable multi-step loan journeys in Angular integrated with Java Spring Boot APIs for end-to-end loan onboarding.',
      platform: 'Angular, Angular Material, Jira, Git, GitHub, Scrum',
      stars: 120,
      forks: 35,
      image: '/assets/image/adcb/dashboard.jpg',
      color: '#dd0031',
    },
    {
      title: 'Axis Bank Dealer LOS',
      visibility: 'Private',
      description:
        'Developed dealer-focused loan origination flows, dashboards, and application tracking modules in Angular with backend integration',
      platform: 'Angular, Angular Material, Jira, Spring Boot, MySQL',
      stars: 95,
      forks: 22,
      image: '/assets/image/axis/1.jpg',
      color: '#dd0031',
    },
    {
      title: 'Redmil FinTech Platform',
      visibility: 'Private',
      description:
        'Developed a full-featured fintech web application supporting AEPS, Recharge, Bill Payments, Wallet Transactions, and Micro ATM services..',
      platform: ' Angular, Angular Material, REST APIs, JWT, RxJS',
      stars: 70,
      forks: 18,
      image: '/assets/image/redmil_fintech/login.png',
      color: '#dd0031',
    },
    {
      title: 'HDFC Loan CRM',
      visibility: 'Private',
      description:
        'Built an Angular-based CRM for customer on-boarding, loan application workflows, and approval process with secure API integration.',
      platform:
        'Angular, Angular Material, REST APIs, JWT, RxJS, GitHub, Postman',
      stars: 150,
      forks: 40,
      image: '/assets/image/redmil_hdfc/masterBranchData.png',
      color: '#dd0031',
    },
  ];

  deferredPrompt: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('pinnedRepos');
      if (saved) {
        this.repositories = JSON.parse(saved);
      }

      window.addEventListener('beforeinstallprompt', (event: any) => {
        if (window.location.hostname === 'kudoengineer.com') {
          event.preventDefault();
          this.deferredPrompt = event;
          console.log('Portfolio PWA install ready');
        }
      });
    }
  }

  ngOnInit() {}
  drop(event: CdkDragDrop<RepositoryModel[]>) {
    moveItemInArray(this.repositories, event.previousIndex, event.currentIndex);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('pinnedRepos', JSON.stringify(this.repositories));
    }
  }

  // Open personal website
  openWebsite(type: string = 'personal') {
    if (type === 'serotask') {
      window.open('https://www.serotask.com/', '_blank');
    } else {
      window.open(this.websiteUrl, '_blank');
    }
  }

  installPWA() {
    debugger;
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Portfolio PWA installed');
      } else {
        console.log('Installation dismissed');
      }
      this.deferredPrompt = null;
    });
  }
}
