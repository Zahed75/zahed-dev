import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Angular Material imports
import { MatIconModule } from '@angular/material/icon';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatIconModule // Add Material Icons
  ],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;

  navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Projects', path: '/projects', icon: 'code' },
    { name: 'Experience', path: '/portfolio', icon: 'work' },
    { name: 'Case Studies', path: '/case-study', icon: 'analytics' },
    { name: 'Contact', path: '/contact', icon: 'mail' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}