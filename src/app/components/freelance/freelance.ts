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
  private currentVideoIndex = 0;
  private currentTestimonialIndex = 0;
  private autoSlideInterval: any;
  private totalVideos = 2;
  private totalTestimonials = 2;

  ngAfterViewInit() {
    this.initVideoCarousel();
    this.initTestimonialCarousel();
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private initVideoCarousel() {
    this.updateVideoCarousel();
  }

  private initTestimonialCarousel() {
    this.updateTestimonialCarousel();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextVideo();
    }, 6000); // Change every 6 seconds
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

  // Testimonial Carousel Methods
  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.totalTestimonials;
    this.updateTestimonialCarousel();
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.totalTestimonials) % this.totalTestimonials;
    this.updateTestimonialCarousel();
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
    this.updateTestimonialCarousel();
  }

  private updateTestimonialCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    if (carousel) {
      const translateX = -this.currentTestimonialIndex * 100;
      carousel.style.transform = `translateX(${translateX}%)`;
    }
    
    // Update dots
    dots.forEach((dot, index) => {
      if (index === this.currentTestimonialIndex) {
        dot.classList.add('bg-blue-600');
        dot.classList.remove('bg-gray-300');
      } else {
        dot.classList.remove('bg-blue-600');
        dot.classList.add('bg-gray-300');
      }
    });
  }
}