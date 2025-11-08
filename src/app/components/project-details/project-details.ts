import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.html'
})
export class ProjectDetails implements OnInit {
  projectId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get the project ID from the route parameters
    this.projectId = this.route.snapshot.paramMap.get('id');
    
    // In the future, you can use this ID to fetch project details from API
    console.log('Project ID:', this.projectId);
    
    // Example: Fetch project data based on ID
    // this.fetchProjectDetails(this.projectId);
  }

  // This method will be used when you integrate API
  fetchProjectDetails(id: string | null) {
    // Make API call to get project details
    // For now, it's a placeholder
  }
}