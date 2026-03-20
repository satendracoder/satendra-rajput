import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent {
  showPopup = false;
  step: 'ask' | 'welcome' | 'intro' = 'ask';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const seen = localStorage.getItem('onboarding_seen');

      if (!seen) {
        this.showPopup = true;
      }
    }
  }

  selectUser(type: 'recruiter' | 'other') {
    if (type === 'recruiter') {
      this.step = 'intro';
      setTimeout(() => {
        this.startTour(); // 🔥 start intro
      }, 1000);
    } else {
      this.step = 'welcome';
    }
    setTimeout(() => {
      this.close();
    }, 4000);
  }

  close() {
    this.showPopup = false;
  }

  async startTour() {

    if (isPlatformBrowser(this.platformId)) {

      const introJs = (await import('intro.js')).default;

      introJs().setOptions({
        nextLabel: 'Next →',
        prevLabel: '← Back',
        doneLabel: 'Finish',
        showProgress: true,

        steps: [
          {
            intro: "👋 Welcome to Satendra's Portfolio"
          },
          {
            element: '#home',
            title: 'Overview',
            intro: 'This is the homepage where you can see my skills and highlights.'
          },
          {
            element: '#projects',
            title: 'Projects',
            intro: 'Explore real-world fintech and full-stack projects here.'
          },
          {
            element: '#skills',
            title: 'Tech Stack',
            intro: 'Technologies I work with including Angular, Spring Boot & more.'
          },
          {
            element: '#contact',
            title: 'Contact',
            intro: 'Get in touch with me for opportunities or collaboration.'
          }
        ]
      }).start();

    }

  }
}
