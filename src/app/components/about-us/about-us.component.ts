import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
resumeUrl = '/assets/resume/Resume.pdf';
 websiteUrl = 'https://satendracoder.com';

 openWebsite(type: string = 'personal') {
    if (type === 'serotask') {
      window.open('https://www.serotask.com/', '_blank');
    } else {
      window.open(this.websiteUrl, '_blank');
    }
  }
}
