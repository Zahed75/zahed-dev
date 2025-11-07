import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;

  navItems: NavItem[] = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'Work', path: '/projects', icon: '💼' },
    { name: 'Experience', path: '/portfolio', icon: '🚀' },
    { name: 'Case Studies', path: '/case-study', icon: '📊' },
    { name: 'Contact', path: '/contact', icon: '📞' }
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