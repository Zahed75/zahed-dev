import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    projectDetails: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.contactForm);
    // In a real application, you would send this data to your backend
    alert('Thank you for your inquiry! I will get back to you within 24 hours.');
    
    // Reset form
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      projectDetails: ''
    };
  }
}