import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  name: string;
  path: string;
  id: string;
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
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Projects', path: '/projects', id: 'projects' },
    { name: 'Portfolio', path: '/portfolio', id: 'portfolio' },
    { name: 'Case Study', path: '/case-study', id: 'case-study' },
    { name: 'Client Feedback', path: '/feedback', id: 'feedback' },
    { name: 'Freelance', path: '/freelance', id: 'freelance' },
    { name: 'Contact', path: '/contact', id: 'contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToContact(): void {
    this.closeMobileMenu();
    console.log('Navigating to contact page');
  }
}