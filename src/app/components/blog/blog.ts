import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  tags: string[];
  is_featured: boolean;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './blog.html'
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [];
  featuredPost: BlogPost | null = null;
  isLoading = true;
  
  categories: string[] = ['All'];
  activeCategory: string = 'All';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getBlogPosts().subscribe({
      next: (data) => {
        const shaped = data.map(p => ({
          id: p.id,
          title: p.title,
          excerpt: p.excerpt,
          category: p.category,
          date: p.date,
          readTime: p.read_time,
          slug: p.slug || p.id.toString(),
          image: p.image,
          tags: p.tags || [],
          is_featured: p.is_featured
        }));
        
        // Extract unique categories
        const dynamicCategories = Array.from(new Set(shaped.map(p => p.category))).filter(c => c);
        this.categories = ['All', ...dynamicCategories];

        this.featuredPost = shaped.find(p => p.is_featured) || shaped[0] || null;
        
        // The remaining posts in the grid should exclude the featured post
        this.posts = shaped.filter(p => !this.featuredPost || p.id !== this.featuredPost.id);
        
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  setCategory(category: string): void {
    this.activeCategory = category;
  }

  get filteredPosts(): BlogPost[] {
    if (this.activeCategory === 'All') {
      return this.posts;
    }
    return this.posts.filter(p => p.category === this.activeCategory);
  }
}