import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-study-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './case-study-details.html'
})
export class CaseStudyDetails implements OnInit {
  caseStudyId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.caseStudyId = this.route.snapshot.paramMap.get('id');
    // You can use this ID to fetch specific case study data from API
  }
}