import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  tech: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
  companyLogo: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  profileImageLoaded: boolean = false;
  logoErrors: Set<number> = new Set();

  // Services Data
  services: Service[] = [
    {
      title: 'Enterprise Software Solution',
      description: 'Scalable web applications using Angular with robust backend APIs and microservices architecture.',
      icon: '⚡',
      tech: ['Angular', 'Node.js', 'Django', 'PostgreSQL']
    },
    {
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with Flutter, featuring offline capabilities and real-time sync.',
      icon: '📱',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs']
    },
    {
      title: 'Backend & API Development',
      description: 'High-performance RESTful APIs and microservices with proper authentication and documentation.',
      icon: '🔧',
      tech: ['Django REST', 'Express.js', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'AWS cloud solutions with Docker containerization, CI/CD pipelines, and auto-scaling.',
      icon: '☁️',
      tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      icon: '🛒',
      tech: ['Django', 'React', 'PostgreSQL', 'Payment APIs']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernizing legacy systems and implementing automation for improved operational efficiency.',
      icon: '🚀',
      tech: ['Microservices', 'Automation', 'Cloud Migration', 'API Integration']
    }
  ];

  // Compact Tech Stack Data
  frontendTech: string[] = [
    'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'RxJS'
  ];

  backendTech: string[] = [
    'Node.js', 'Express.js', 'Django', 'Django REST', 'Python', 'REST APIs', 'GraphQL'
  ];

  mobileDbTech: string[] = [
    'Flutter', 'Dart', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite'
  ];

  devopsTech: string[] = [
    'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Nginx', 'Linux'
  ];

  toolsTech: string[] = [
    'Git', 'GitHub', 'Postman', 'VS Code', 'Jira', 'Figma', 'Swagger'
  ];

  learningTech: string[] = [
    'Odoo', 'AI', 'GraphQL', 'Serverless'
  ];

  experiences: Experience[] = [
    {
      company: 'ACI Logistics Ltd.',
      role: 'Software Engineer Level-II',
      period: 'March 2025 - Present',
      highlights: [
        'Developed Flutter apps for 700+ retail outlets',
        'Implemented real-time logistics management',
        'Achieved 99% reduction in audit processing time'
      ],
      tech: ['Flutter', 'Angular', 'Django REST', 'PostgreSQL'],
      companyLogo: 'assets/logo/aci.png'
    },
    {
      company: 'Best Electronics Ltd.',
      role: 'Deputy Manager (Software Engineer)',
      period: 'Jan 2024 - Mar 2025',
      highlights: [
        'Led backend development & CI/CD implementation',
        'Optimized operational costs by 30%',
        'Automated order & delivery systems'
      ],
      tech: ['Django REST', 'Express.js', 'PostgreSQL', 'Docker'],
      companyLogo: 'assets/logo/BEL.png'
    },
    {
      company: 'Syesomatic Technologies',
      role: 'Software Engineer',
      period: 'May 2020 - Dec 2023',
      highlights: [
        'Built high-performance APIs and microservices',
        'Architected AWS cloud infrastructure',
        'Implemented Kubernetes for scalability'
      ],
      tech: ['AWS', 'Kubernetes', 'Node.js', 'Docker'],
      companyLogo: 'assets/brands/sysco.png'
    }
  ];

  // Method to get company logo background color
  getCompanyLogoClass(index: number): string {
    const colors = [
      'bg-gradient-to-br from-red-500 to-red-600',
      'bg-gradient-to-br from-white-700 to-orange-500', 
      'bg-gradient-to-br from-white-500 to-white-600'
    ];
    return colors[index % colors.length];
  }

  // Method to get period dot color
  getPeriodDotClass(index: number): string {
    const colors = [
      'bg-red-600',
      'bg-orange-500',
      'bg-blue-500'
    ];
    return colors[index % colors.length];
  }

  // Handle logo loading errors
  onLogoError(index: number): void {
    this.logoErrors.add(index);
  }

  // Check if logo has error
  isLogoError(index: number): boolean {
    return this.logoErrors.has(index);
  }

  // Get company initials for fallback
  getCompanyInitials(company: string): string {
    return company
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  onProfileImageLoad(): void {
    this.profileImageLoaded = true;
  }
}