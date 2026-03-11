import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
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
  content: string;
  tags: string[];
  author: string;
  authorRole: string;
  authorBio: string;
}

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './blog-details.html',
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailsComponent implements OnInit {
  post: BlogPost | null = null;
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('id');
      if (slug) {
        this.loadPost(slug);
      } else {
        this.isLoading = false;
        this.errorMessage = "Article not found.";
      }
    });
  }

  loadPost(slug: string): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.apiService.getBlogPostById(slug).subscribe({
      next: (data) => {
        this.post = {
          id: data.id,
          title: data.title,
          excerpt: data.excerpt,
          category: data.category,
          date: data.date,
          readTime: data.read_time,
          slug: data.slug || data.id.toString(),
          image: data.image,
          content: data.content,
          tags: data.tags || [],
          author: data.author || 'Zahed Hasan',
          authorRole: data.author_role || 'Engineering Manager',
          authorBio: data.author_bio
        };
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = "Failed to load the article. It might have been removed or the URL is incorrect.";
      }
    });
  }

  get defaultShareUrl(): string {
    return `https://thezhasan.com/blog/${this.post?.slug}`;
  }

  shareOnLinkedIn(): void {
    if (!this.post) return;
    const url = encodeURIComponent(this.defaultShareUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=600');
  }

  shareOnTwitter(): void {
    if (!this.post) return;
    const url = encodeURIComponent(this.defaultShareUrl);
    const text = encodeURIComponent(this.post.title);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=300');
  }

  shareOnFacebook(): void {
    if (!this.post) return;
    const url = encodeURIComponent(this.defaultShareUrl);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=600');
  }

}