import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Projects } from './components/projects/projects';
import { CaseStudy } from './components/case-study/case-study';
import { Feedback } from './components/feedback/feedback';
import { Freelance } from './components/freelance/freelance';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';
import { ProjectDetails } from './components/project-details/project-details';
import { AboutMe } from './components/about-me/about-me';
import { CaseStudyDetails } from './components/case-study-details/case-study-details';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Zahed Hasan - Full Stack Developer'
  },
  {
    path: 'projects',
    component: Projects,
    title: 'Projects - Zahed Hasan'
  },
  {
    path: 'projects/:id',
    component: ProjectDetails,
    title: 'Project Details - Zahed Hasan'
  },
  {
    path: 'case-study',
    component: CaseStudy,
    title: 'Case Studies - Zahed Hasan'
  },
  { 
    path: 'case-study/:id', // Fixed route path
    component: CaseStudyDetails,
    title: 'Case Study Details - Zahed Hasan'
  },
  {
    path: 'about-me',
    component: AboutMe,
    title: 'About Me - Zahed Hasan'
  },
  {
    path: 'feedback',
    component: Feedback,
    title: 'Client Feedback - Zahed Hasan'
  },
  {
    path: 'freelance',
    component: Freelance,
    title: 'Freelance Services - Zahed Hasan'
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact - Zahed Hasan'
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFound,
    title: 'Page Not Found - Zahed Hasan'
  }
];