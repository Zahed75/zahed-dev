import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

interface Project {
  id: number;
  title: string;
  industry: string;
  myRole: string;
  description: string;
  tech: string[];
  slug: string;
  image: string;
  is_featured: boolean;
  syscomaticLink: string;
  keyFeatures: { links?: {label: string, url: string}[] };
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './projects.html'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProjects().subscribe({
      next: (data) => {
        this.projects = data.map(p => ({
          id: p.id,
          title: p.title,
          industry: p.industry,
          myRole: p.my_role,
          description: p.description,
          tech: p.tech || [],
          slug: p.slug,
          image: p.image,
          is_featured: p.is_featured,
          syscomaticLink: p.syscomatic_link,
          keyFeatures: p.key_features || {}
        }));
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}