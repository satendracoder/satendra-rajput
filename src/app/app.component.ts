import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileComponent } from "./components/profile/profile.component";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import introJs from 'intro.js';
import { isPlatformBrowser } from '@angular/common';
import { OnboardingComponent } from "./shared/components/onboarding/onboarding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule, ProfileComponent,
    MatButtonModule, MatMenuModule, MatIconModule,
    MatBadgeModule, MatSlideToggleModule, FormsModule,
    RouterLink, RouterLinkActive,
    OnboardingComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  checked = false;
  title = 'satendra-rajput';
  resumeUrl = '/assets/resume/Resume.pdf';
  websiteUrl = 'https://satendracoder.com';
  phoneNumber = '+918859758708';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    // this.startTour();

    if (isPlatformBrowser(this.platformId)) {

      const alreadyShown = sessionStorage.getItem('portfolio_banner');

      if (!alreadyShown) {
        this.showBanner = true;

        sessionStorage.setItem('portfolio_banner', 'true');
      }

    }

  }

  showBanner: boolean = false;

  closeBanner() {
    this.showBanner = false;
  }

  // Resume download
  downloadResume() {
    const link = document.createElement('a');
    link.href = this.resumeUrl;
    link.download = 'Satendra_Resume.pdf';
    link.click();
  }

  // Open personal website
  openWebsite() {
    if (isPlatformBrowser(this.platformId)) {
      window.open(this.websiteUrl, '_blank');
    }
  }

  // Call phone or copy number
  callPhone() {
    window.location.href = `tel:${this.phoneNumber}`;
  }


  async startTour() {

    if (isPlatformBrowser(this.platformId)) {

      const introJs = (await import('intro.js')).default;

      introJs().setOptions({
        steps: [
          { intro: "Welcome to my portfolio" },
          { element: '#about', intro: "About me" },
          { element: '#projects', intro: "My projects" }
        ]
      }).start();

    }

  }
}
