import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Technology {
  name: string;
  icon: string;
  category: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
  color: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  technologies: Technology[] = [
    { name: 'Angular', icon: '⚡', category: 'Frontend' },
    { name: 'Django', icon: '🐍', category: 'Backend' },
    { name: 'Flutter', icon: '📱', category: 'Mobile' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'Node.js', icon: '🟢', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Redis', icon: '🔴', category: 'Cache' },
    { name: 'Kubernetes', icon: '⚓', category: 'DevOps' }
  ];

  experiences: Experience[] = [
    {
      company: 'ACI Logistics Ltd.',
      role: 'Software Engineer Level-II',
      period: 'May 2024 - Present',
      highlights: [
        'Flutter App Development for ACI Logistics to enhance customer experience',
        'Backend & API integration for real-time order, inventory, and logistics management',
        'Improved retail operations efficiency for Shwapno, Bangladesh\'s largest retail chain'
      ],
      tech: ['Flutter', 'Angular', 'Django REST', 'PostgreSQL'],
      color: 'blue'
    },
    {
      company: 'Best Electronics Ltd.',
      role: 'Deputy Manager (Software Engineer)',
      period: 'Jan 2024 - Mar 2025',
      highlights: [
        'Led backend development, CI/CD pipeline integrations, and Docker implementation',
        'Optimized operational costs 30% by automating order and delivery systems',
        'Built scalable backend with secure payment integration for seamless transactions'
      ],
      tech: ['Django REST', 'Express.js', 'PostgreSQL', 'MongoDB', 'Docker'],
      color: 'green'
    },
    {
      company: 'Syesomatic Technologies Ltd.',
      role: 'Software Engineer',
      period: 'May 2020 - Dec 2023',
      highlights: [
        'Built and tested high-performance APIs with RDS & EC2',
        'Architected and optimized cloud infrastructure with AWS, Docker, and Kubernetes',
        'Ensured reliability, scalability, and seamless database management'
      ],
      tech: ['AWS', 'Kubernetes', 'Docker', 'Node.js', 'PostgreSQL'],
      color: 'purple'
    }
  ];
}