import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { LottieComponent } from 'ngx-lottie';

@Component({
    selector: 'app-onboarding',
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

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('onboarding_seen', 'onboarding_seen');
      this.showPopup = false;
    }
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
      scrollToElement: true,

      steps: [

        {
          intro: "👋 Welcome to my portfolio! Let me guide you quickly."
        },

        {
          element: '#nav-overview',
          title: 'Overview',
          intro: 'This is the homepage where you can see my highlights and summary.'
        },

        {
          element: '#nav-projects',
          title: 'Projects',
          intro: 'Here you can explore my real-world projects with full details.'
        },

        {
          element: '#nav-skills',
          title: 'Skills',
          intro: 'Technologies and tools I work with as a full-stack developer.'
        },

        {
          element: '#nav-experience',
          title: 'Experience',
          intro: 'My professional journey and companies I have worked with.'
        },

        {
          element: '#nav-packages',
          title: 'Packages',
          intro: 'Custom Angular tools and libraries I have built.'
        },

        {
          element: '#nav-about',
          title: 'About Me',
          intro: 'Know more about my background and expertise.'
        },

        {
          element: '#nav-contact',
          title: 'Contact',
          intro: 'Get in touch with me for opportunities or collaboration.'
        }

      ]

    }).start();

  }

}
}
