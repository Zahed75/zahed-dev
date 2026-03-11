import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ApiService } from '../../services/api';

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
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './about-me.html'
})
export class AboutMeComponent implements OnInit {
  leadershipSkills: string[] = [];
  technicalSkills: string[] = [];
  experiences: Experience[] = [];
  
  calendlyUrl = 'https://calendly.com/zahed-hasan-rabbi/30min';

  educations = [
    {
      institution: 'IU International University of Applied Sciences',
      location: 'Germany',
      period: 'September 2022 – February 2025',
      degree: 'Bachelor of Engineering (BE) in Software Development',
      description: 'Accreditation: Completed a 180 ECTS credit program at a German-accredited institution recognized by ZFU (Central Office for Distance Learning)'
    }
  ];

  certifications = [
    { name: 'Full Stack Web Development with MERN', issuer: 'Ostad - Learn Skills Live', id: 'CID:C5360', date: 'Sep 2022 - March 2023' },
    { name: 'Build a Backend API with Python', issuer: 'Udemy', id: '', date: 'June 2021 - October 2021' },
    { name: 'Mobile App Development in Flutter', issuer: 'Ostad - Learn Skills Live', id: '', date: 'April 2023 - Sep 2023' },
    { name: 'Reactive Angular applications', issuer: 'Udemy', id: '', date: 'Dec 2024 - Feb 2025' },
    { name: 'CCNA (Cisco Certified Network Associate)', issuer: 'Daffodil Int. Professional Training Institute', id: '', date: '08 Oct 2020 - 07 Apr 2021' }
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getSkills().subscribe(skills => {
      this.leadershipSkills = skills.filter(s => s.category === 'leadership').map(s => s.name);
      this.technicalSkills = skills.filter(s => s.category === 'technical').map(s => s.name);
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
}