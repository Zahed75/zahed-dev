import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  title: string;
  description: string;
  icon: string;
  tech: string[];
}

interface Technology {
  name: string;
  logo: string;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface TechCategory {
  name: string;
  icon: string;
  count: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  profileImageLoaded: boolean = false;

  services: Service[] = [
    {
      title: 'Enterprise Web Development',
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

  technologies: Technology[] = [
    { name: 'Angular', logo: '/assets/tech-logos/angular.svg', category: 'Frontend' },
    { name: 'TypeScript', logo: '/assets/tech-logos/typescript.svg', category: 'Language' },
    { name: 'Node.js', logo: '/assets/tech-logos/nodejs.svg', category: 'Backend' },
    { name: 'Express.js', logo: '/assets/tech-logos/express.svg', category: 'Backend' },
    { name: 'Django', logo: '/assets/tech-logos/django.svg', category: 'Backend' },
    { name: 'Django REST', logo: '/assets/tech-logos/django-rest.svg', category: 'API' },
    { name: 'Python', logo: '/assets/tech-logos/python.svg', category: 'Language' },
    { name: 'Flutter', logo: '/assets/tech-logos/flutter.svg', category: 'Mobile' },
    { name: 'PostgreSQL', logo: '/assets/tech-logos/postgresql.svg', category: 'Database' },
    { name: 'MySQL', logo: '/assets/tech-logos/mysql.svg', category: 'Database' },
    { name: 'MongoDB', logo: '/assets/tech-logos/mongodb.svg', category: 'Database' },
    { name: 'Redis', logo: '/assets/tech-logos/redis.svg', category: 'Cache' },
    { name: 'AWS', logo: '/assets/tech-logos/aws.svg', category: 'Cloud' },
    { name: 'Docker', logo: '/assets/tech-logos/docker.svg', category: 'DevOps' },
    { name: 'Kubernetes', logo: '/assets/tech-logos/kubernetes.svg', category: 'DevOps' },
    { name: 'Git', logo: '/assets/tech-logos/git.svg', category: 'Tools' },
    { name: 'GitHub Actions', logo: '/assets/tech-logos/github-actions.svg', category: 'CI/CD' },
    { name: 'Nginx', logo: '/assets/tech-logos/nginx.svg', category: 'Server' }
  ];

  techCategories: TechCategory[] = [
    { name: 'Frontend', icon: '🎨', count: 2 },
    { name: 'Backend', icon: '⚙️', count: 5 },
    { name: 'Database', icon: '🗄️', count: 4 },
    { name: 'DevOps', icon: '🔗', count: 4 }
  ];

  processSteps: ProcessStep[] = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Understanding your business needs and defining project scope, goals, and technical requirements.'
    },
    {
      step: '2',
      title: 'Architecture Design',
      description: 'Creating scalable system architecture, database design, and technology stack selection.'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing, code reviews, and quality assurance.'
    },
    {
      step: '4',
      title: 'Deployment & Support',
      description: 'CI/CD deployment, monitoring, and ongoing maintenance with performance optimization.'
    }
  ];

  experiences: Experience[] = [
    {
      company: 'ACI Logistics Ltd.',
      role: 'Software Engineer Level-II',
      period: 'May 2024 - Present',
      highlights: [
        'Developed Flutter apps for 700+ retail outlets',
        'Implemented real-time logistics management',
        'Achieved 99% reduction in audit processing time'
      ],
      tech: ['Flutter', 'Angular', 'Django REST', 'PostgreSQL']
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
      tech: ['Django REST', 'Express.js', 'PostgreSQL', 'Docker']
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
      tech: ['AWS', 'Kubernetes', 'Node.js', 'Docker']
    }
  ];

  onProfileImageLoad() {
    this.profileImageLoaded = true;
  }
}