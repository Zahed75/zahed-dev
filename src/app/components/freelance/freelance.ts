import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './freelance.html'
})
export class Freelance implements AfterViewInit, OnDestroy {
  private currentReviewIndex = 0;
  private currentVideoIndex = 0;
  private autoSlideInterval: any;
  private totalReviews = 3;
  private totalVideos = 3;

  ngAfterViewInit() {
    this.initReviewCarousel();
    this.initVideoCarousel();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private initReviewCarousel() {
    this.updateReviewCarousel();
  }

  private initVideoCarousel() {
    this.updateVideoCarousel();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextReview();
    }, 4000); // Change every 4 seconds
  }

  // Review Carousel Methods
  nextReview() {
    this.currentReviewIndex = (this.currentReviewIndex + 1) % this.totalReviews;
    this.updateReviewCarousel();
  }

  prevReview() {
    this.currentReviewIndex = (this.currentReviewIndex - 1 + this.totalReviews) % this.totalReviews;
    this.updateReviewCarousel();
  }

  goToReview(index: number) {
    this.currentReviewIndex = index;
    this.updateReviewCarousel();
  }

  private updateReviewCarousel() {
    const carousel = document.getElementById('reviewCarousel');
    const dots = document.querySelectorAll('.carousel-dot');
    
    if (carousel) {
      const translateX = -this.currentReviewIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === this.currentReviewIndex) {
        dot.classList.add('bg-blue-600');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-gray-300');
      }
    });
  }

  // Video Carousel Methods
  nextVideo() {
    this.currentVideoIndex = (this.currentVideoIndex + 1) % this.totalVideos;
    this.updateVideoCarousel();
  }

  prevVideo() {
    this.currentVideoIndex = (this.currentVideoIndex - 1 + this.totalVideos) % this.totalVideos;
    this.updateVideoCarousel();
  }

  goToVideo(index: number) {
    this.currentVideoIndex = index;
    this.updateVideoCarousel();
  }

  private updateVideoCarousel() {
    const carousel = document.getElementById('videoCarousel');
    const dots = document.querySelectorAll('.video-dot');
    
    if (carousel) {
      const translateX = -this.currentVideoIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === this.currentVideoIndex) {
        dot.classList.add('bg-blue-600');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-gray-300');
      }
    });
  }
}