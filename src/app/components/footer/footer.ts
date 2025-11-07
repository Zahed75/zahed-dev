import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface QuickLink {
  name: string;
  path: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  quickLinks: QuickLink[] = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy', path: '/privacy' }
  ];

  socialLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/zahedhasan', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/zahedhasan', icon: 'IN' },
    { name: 'Email', url: 'mailto:zahedhasan.cs@gmail.com', icon: '✉️' }
  ];
}