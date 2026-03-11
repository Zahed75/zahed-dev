import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

interface Project {
  id: number;
  title: string;
  industry: string;
  myRole: string;
  teamSize: string;
  impactMetric: string;
  description: string;
  tech: string[];
  slug: string;
  image: string;
  syscomaticLink: string;
  clientBackground: string;
  challenge: string;
  approachSolution: string;
  keyFeatures: { features?: string[], links?: {label: string, url: string}[] };
  impactDetailed: { metrics?: string[] };
  clientTestimonial: string;
  clientTestimonialAuthor: string;
}

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './project-details.html'
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idOrSlug = params.get('id'); // Route might be configured to pass :id, but we are passing slug in URL
      if (idOrSlug) {
        this.loadProject(idOrSlug);
      }
    });
  }

  loadProject(slug: string): void {
    this.isLoading = true;
    this.apiService.getProjectById(slug).subscribe({
      next: (p) => {
        this.project = {
          id: p.id,
          title: p.title,
          industry: p.industry,
          myRole: p.my_role,
          teamSize: p.team_size,
          impactMetric: p.impact_metric,
          description: p.description,
          tech: p.tech || [],
          slug: p.slug,
          image: p.image,
          syscomaticLink: p.syscomatic_link,
          clientBackground: p.client_background,
          challenge: p.challenge,
          approachSolution: p.approach_solution,
          keyFeatures: p.key_features || {},
          impactDetailed: p.impact_detailed || {},
          clientTestimonial: p.client_testimonial,
          clientTestimonialAuthor: p.client_testimonial_author
        };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}