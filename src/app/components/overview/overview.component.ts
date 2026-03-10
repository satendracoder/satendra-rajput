import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  imports: [CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

 repositories: RepositoryModel[] = [
{
title: 'Fintech AEPS System',
visibility: 'Public',
description: 'Angular + Spring Boot based AEPS transaction system',
platform: 'Angular',
stars: 120,
forks: 35,
image: 'https://me.satendracoder.com/assets/images/projects/redmil_fintech/login.png',
color: '#dd0031'
},
{
title: 'Recharge & Bill Payment Platform',
visibility: 'Public',
description: 'Multi recharge platform with payment gateway',
platform: 'Angular',
stars: 95,
forks: 22,
image: 'assets/projects/recharge.png',
color: '#dd0031'
},
{
title: 'Developer Portfolio',
visibility: 'Public',
description: 'Modern animated portfolio using Angular',
platform: 'Angular',
stars: 70,
forks: 18,
image: 'assets/projects/portfolio.png',
color: '#dd0031'
},
{
title: 'Angular UI Component Library',
visibility: 'Public',
description: 'Reusable Angular UI components library',
platform: 'Angular',
stars: 150,
forks: 40,
image: 'assets/projects/ui-library.png',
color: '#dd0031'
}
];
}
