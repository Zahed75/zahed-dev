import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/projects/`);
  }

  getProjectById(slug: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects/${slug}/`);
  }

  getTestimonials(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/testimonials/`);
  }

  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/blogposts/`);
  }

  getBlogPostById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/blogposts/${id}/`);
  }

  getFAQs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/faqs/`);
  }

  getExperiences(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/experiences/`);
  }

  getSkills(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/skills/`);
  }

  getResume(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/resumes/`);
  }

  sendContactMessage(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact/`, data);
  }
}
