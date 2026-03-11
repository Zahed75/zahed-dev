import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

interface FeaturedProject {
  id: number;
  title: string;
  industry: string;
  myRole: string;
  description: string;
  tech: string[];
  slug: string;
  image: string;
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

interface BlogPreview {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

interface FAQ {
  id: number;
  question: string;
  answer: string;
  open: boolean;
}

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
  tech: string[];
  companyUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  calendlyUrl = 'https://calendly.com/zahed-hasan-rabbi/30min';

  leadershipSkills: string[] = [];
  technicalSkills: string[] = [];
  featuredProjects: FeaturedProject[] = [];
  testimonials: Testimonial[] = [];
  blogPreviews: BlogPreview[] = [];
  faqs: FAQ[] = [];
  experiences: Experience[] = [];

  stats = [
    { value: '50+', label: 'Engineers Led' },
    { value: '20+', label: 'Enterprise Systems Delivered' },
    { value: '5+', label: 'Global Markets' },
    { value: '10+', label: 'Years Building' }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.apiService.getSkills().subscribe(skills => {
      this.leadershipSkills = skills.filter(s => s.category === 'leadership').map(s => s.name);
      this.technicalSkills = skills.filter(s => s.category === 'technical').map(s => s.name);
    });

    this.apiService.getProjects().subscribe(projects => {
      // API returns a list, filter featured locally, or backend already handles it via ?is_featured=true 
      // Assuming backend filtering isn't hooked up to this exact method yet, filter locally just in case.
      this.featuredProjects = projects
        .filter(p => p.is_featured)
        .slice(0, 4)
        .map(p => ({
          id: p.id,
          title: p.title,
          industry: p.industry,
          myRole: p.my_role,
          description: p.description,
          tech: p.tech,
          slug: p.slug,
          image: p.image
        }));
    });

    this.apiService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials.slice(0, 4);
    });

    this.apiService.getBlogPosts().subscribe(blogs => {
      this.blogPreviews = blogs
        .slice(0, 3)
        .map(b => ({
          id: b.id,
          title: b.title,
          excerpt: b.excerpt,
          category: b.category,
          date: b.date,
          readTime: b.read_time,
          slug: b.slug || b.id.toString(),
          tags: b.tags || []
        }));
    });

    this.apiService.getFAQs().subscribe(faqs => {
      this.faqs = faqs.map(f => ({ ...f, open: false }));
    });

    this.apiService.getExperiences().subscribe(experiences => {
      this.experiences = experiences.map(e => ({
        id: e.id,
        company: e.company,
        role: e.role,
        period: e.period,
        isCurrent: e.is_current,
        highlights: e.highlights || [],
        tech: e.tech || [],
        companyUrl: e.company_url || ''
      }));
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}