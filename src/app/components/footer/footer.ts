import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

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
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './footer.html'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  footerLinks: FooterLink[] = [
    { name: 'Work', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Speaking', path: '/speaking' },
    { name: 'About', path: '/about-me' },
    { name: 'Case Studies', path: '/case-study' }
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
      name: 'Instagram', 
      url: 'https://instagram.com/thezhasan', 
      icon: 'instagram',
      handle: '@thezhasan'
    },
    { 
      name: 'Email', 
      url: 'mailto:zahedhasan.cs@gmail.com', 
      icon: 'email',
      handle: 'zahedhasan.cs@gmail.com'
    }
  ];
}