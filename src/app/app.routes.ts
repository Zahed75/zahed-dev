import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProjectsComponent as Projects } from './components/projects/projects';
import { CaseStudy } from './components/case-study/case-study';
import { Feedback } from './components/freelance/freelance';
import { ContactComponent as Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';
import { ProjectDetailsComponent as ProjectDetails } from './components/project-details/project-details';
import { AboutMeComponent as AboutMe } from './components/about-me/about-me';
import { CaseStudyDetails } from './components/case-study-details/case-study-details';
import { BlogComponent as Blog } from './components/blog/blog';
import { BlogDetailsComponent as BlogDetails } from './components/blog-details/blog-details';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Zahed Hasan | Engineering Manager & Co-founder of Syscomatic LLC'
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Featured Work — Products Built at Syscomatic | Zahed Hasan'
  },
  {
    path: 'projects/:id',
    component: ProjectDetails,
    title: 'Project Case Study | Zahed Hasan'
  },
  {
    path: 'case-study',
    component: CaseStudy,
    title: 'Case Studies | Zahed Hasan'
  },
  {
    path: 'case-study/:id',
    component: CaseStudyDetails,
    title: 'Case Study Details | Zahed Hasan'
  },
  {
    path: 'about-me',
    component: AboutMe,
    title: 'About Zahed Hasan — Engineering Manager & Co-founder of Syscomatic LLC'
  },
  {
    path: 'blog',
    component: Blog,
    title: 'Advisory on Engineering & Building Companies | Zahed Hasan'
  },
  {
    path: 'blog/:id',
    component: BlogDetails,
    title: 'Advisory Details | Zahed Hasan'
  },
  {
    path: 'feedback',
    component: Feedback,
    title: 'Client Feedback & Testimonials | Zahed Hasan — Syscomatic LLC'
  },
  {
    // Keep backward compat redirect
    path: 'freelance',
    redirectTo: 'feedback',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Zahed Hasan — Advisory, Speaking & Partnerships'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Page Not Found | Zahed Hasan'
  }
];