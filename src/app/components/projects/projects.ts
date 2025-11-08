import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Project {
  id: string;
  title: string;
  company: string;
  description: string;
  metrics: string[];
  tech: string[];
  type: string;
  gradient: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './projects.html'
})
export class Projects {
  // Project data array
  projects: Project[] = [
    {
      id: 'aci-logistics',
      title: 'Real-Time Audit Platform',
      company: 'ACI Logistics • 700+ Outlets',
      description: 'Cross-platform mobile & web suite digitizing audit processes for Bangladesh\'s largest retail chain with real-time GPS and offline capabilities.',
      metrics: ['99% Faster', 'Real-time', 'Offline'],
      tech: ['Flutter', 'Angular 19', 'Django REST', 'PostgreSQL'],
      type: 'Enterprise',
      gradient: 'from-blue-500 via-blue-600 to-blue-700'
    },
    {
      id: 'onnow-cloud-kitchen',
      title: 'Cloud Kitchen Platform',
      company: 'Onnow • Multi-tenant SaaS',
      description: 'Comprehensive cloud kitchen solution with automated analytics, multi-tenant architecture, and payment integrations for restaurant chains.',
      metrics: ['Revenue Growth', 'Multi-tenant', 'CI/CD'],
      tech: ['Express.js', 'MongoDB', 'Docker', 'Redis'],
      type: 'SaaS',
      gradient: 'from-purple-500 via-purple-600 to-purple-700'
    },
    {
      id: 'vcom-ecommerce',
      title: 'VCom E-commerce',
      company: 'Best Electronics • Cost Optimization',
      description: 'Scalable e-commerce platform with secure payment integration, migrating manual systems to automated order & delivery processes.',
      metrics: ['30% Saved', 'Automated', 'Secure'],
      tech: ['Django REST', 'PostgreSQL', 'Angular', 'Docker'],
      type: 'E-commerce',
      gradient: 'from-green-500 via-green-600 to-green-700'
    }
  ];


    // Helper method to get text color based on gradient
  getTextColorClass(gradient: string): string {
    if (gradient.includes('blue')) return 'text-blue-100';
    if (gradient.includes('purple')) return 'text-purple-100';
    if (gradient.includes('green')) return 'text-green-100';
    return 'text-gray-100';
  }

  // Helper method to get tech stack styling based on gradient
  getTechStackClass(gradient: string): string {
    if (gradient.includes('blue')) return 'bg-blue-50 text-blue-700 border-blue-200';
    if (gradient.includes('purple')) return 'bg-purple-50 text-purple-700 border-purple-200';
    if (gradient.includes('green')) return 'bg-green-50 text-green-700 border-green-200';
    return 'bg-gray-50 text-gray-700 border-gray-200';
  }
}