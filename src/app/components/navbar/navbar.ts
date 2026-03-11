import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;
  calendlyUrl: string = 'https://calendly.com/zahed-hasan-rabbi/30min';
  resumeUrl: string | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getResume().subscribe({
      next: (resumes) => {
        if (resumes && resumes.length > 0) {
          this.resumeUrl = resumes[0].file;
        }
      },
      error: (err) => console.error('Error fetching resume', err)
    });
  }

  navItems: NavItem[] = [
    { name: 'Work', path: '/projects', icon: 'auto_awesome' },
    { name: 'Blog', path: '/blog', icon: 'psychology' },
    { name: 'Speaking', path: '/speaking', icon: 'mic' },
    { name: 'About', path: '/about-me', icon: 'person_search' },
    { name: 'Contact', path: '/contact', icon: 'handshake' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }
}