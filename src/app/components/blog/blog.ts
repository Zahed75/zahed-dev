import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  // Blog posts data - in future this will come from API
  blogPosts = [
    {
      id: 'scalable-angular-applications',
      title: 'Building Scalable Angular Applications with Micro Frontends',
      category: ['Angular', 'Architecture'],
      excerpt: 'Learn how to architect large-scale Angular applications using micro frontend architecture. This comprehensive guide covers module federation, state management, and deployment strategies.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      author: 'Zahed Hasan',
      date: 'Dec 15, 2024',
      readTime: '12 min read',
      featured: true
    },
    {
      id: 'aws-serverless-apis',
      title: 'Building Serverless APIs with AWS Lambda and API Gateway',
      category: ['AWS', 'Serverless'],
      excerpt: 'A complete guide to creating scalable, cost-effective APIs using AWS serverless technologies. Learn best practices for security, monitoring, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      author: 'Zahed Hasan',
      date: 'Dec 12, 2024',
      readTime: '8 min read'
    },
    {
      id: 'nodejs-performance-optimization',
      title: 'Optimizing Node.js Applications for High Traffic',
      category: ['Node.js', 'Performance'],
      excerpt: 'Discover advanced techniques to optimize your Node.js applications for handling millions of requests. Caching strategies, clustering, and memory management.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      author: 'Zahed Hasan',
      date: 'Dec 8, 2024',
      readTime: '10 min read'
    },
    {
      id: 'flutter-react-native-comparison',
      title: 'Flutter vs React Native: Choosing the Right Framework',
      category: ['Flutter', 'Mobile'],
      excerpt: 'Comprehensive comparison between Flutter and React Native for cross-platform mobile development. Performance metrics, development experience, and ecosystem analysis.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
      author: 'Zahed Hasan',
      date: 'Dec 5, 2024',
      readTime: '9 min read'
    },
    {
      id: 'docker-kubernetes-microservices',
      title: 'Containerizing Microservices with Docker and Kubernetes',
      category: ['DevOps', 'Docker'],
      excerpt: 'Step-by-step guide to containerizing your microservices architecture. Learn about Docker best practices, Kubernetes orchestration, and CI/CD pipelines.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      author: 'Zahed Hasan',
      date: 'Dec 1, 2024',
      readTime: '11 min read'
    },
    {
      id: 'mongodb-aggregation-pipelines',
      title: 'Advanced MongoDB Aggregation Pipelines',
      category: ['Database', 'MongoDB'],
      excerpt: 'Master MongoDB aggregation framework with real-world examples. Complex queries, performance optimization, and data transformation techniques.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      author: 'Zahed Hasan',
      date: 'Nov 28, 2024',
      readTime: '7 min read'
    },
    {
      id: 'web-application-security',
      title: 'Web Application Security: Protecting Against Common Threats',
      category: ['Security', 'Best Practices'],
      excerpt: 'Essential security practices for modern web applications. Learn about OWASP Top 10, authentication strategies, and secure coding practices.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      author: 'Zahed Hasan',
      date: 'Nov 25, 2024',
      readTime: '6 min read'
    }
  ];

  // Get featured post (first one for now)
  get featuredPost() {
    return this.blogPosts[0];
  }

  // Get regular posts (all except featured)
  get regularPosts() {
    return this.blogPosts.slice(1);
  }
}