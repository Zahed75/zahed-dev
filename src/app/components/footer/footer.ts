import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface FooterLink {
  name: string;
  path: string;
  icon?: string;
}

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  footerLinks: FooterLink[] = [
    { name: 'Work', path: '/projects', icon: '💼' },
    { name: 'Experience', path: '/portfolio', icon: '🚀' },
    { name: 'Case Studies', path: '/case-study', icon: '📊' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/zahedhasan', 
      icon: 'github',
      handle: '@zahedhasan'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/zahedhasan', 
      icon: 'linkedin',
      handle: 'in/zahedhasan'
    },
    { 
      name: 'Email', 
      url: 'mailto:zahedhasan.cs@gmail.com', 
      icon: 'email',
      handle: 'zahedhasan.cs@gmail.com'
    }
  ];
}