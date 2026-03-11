import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  country: string;
  rating: number;
  date: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './freelance.html'
})
export class Feedback {
  testimonials: Testimonial[] = [
    {
      quote: "Zahed and the Syscomatic team delivered our entire retail management system ahead of schedule. The quality of engineering and communication was exceptional throughout.",
      name: 'Arif Rahman',
      role: 'CTO',
      company: 'ACI Logistics Ltd.',
      country: 'Bangladesh 🇧🇩',
      rating: 5,
      date: 'Jan 2026',
      initials: 'AR',
      color: '#7c3aed'
    },
    {
      quote: "Working with Syscomatic was a game-changer for our operations. The Flutter app they built for our 200 outlets has transformed how our field team works every day.",
      name: 'Sarah Mitchell',
      role: 'VP Operations',
      company: 'TechRetail Group',
      country: 'United States 🇺🇸',
      rating: 5,
      date: 'Dec 2025',
      initials: 'SM',
      color: '#059669'
    },
    {
      quote: "Zahed is not just a great engineer — he's a strategic partner. His team understands product, not just code. I'd work with them again without hesitation.",
      name: 'Mohammed Al-Rashid',
      role: 'Founder',
      company: 'Launchpad Digital',
      country: 'UAE 🇦🇪',
      rating: 5,
      date: 'Nov 2025',
      initials: 'MA',
      color: '#1e1b4b'
    },
    {
      quote: "The inventory automation system built by Zahed's team saved us countless hours of manual data entry. Their attention to detail in the architecture is impressive.",
      name: 'David Chen',
      role: 'Head of Engineering',
      company: 'Global Supply Co.',
      country: 'Singapore 🇸🇬',
      rating: 5,
      date: 'Oct 2025',
      initials: 'DC',
      color: '#2563eb'
    }
  ];

  getStarArray(rating: number): number[] {
    return Array(rating).fill(0);
  }
}