import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { Projects } from './components/projects/projects';
import { Portfolio } from './components/portfolio/portfolio';
import { CaseStudy } from './components/case-study/case-study';
import { Feedback } from './components/feedback/feedback';
import { Freelance } from './components/freelance/freelance';
import { Contact } from './components/contact/contact';
import { NotFound } from './components/not-found/not-found';


export const routes: Routes = [
  // Eagerly loaded routes (better for portfolio)
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
    path: 'portfolio',
    component: Portfolio,
    title: 'Portfolio - Zahed Hasan'
  },
  {
    path: 'case-study',
    component: CaseStudy,
    title: 'Case Studies - Zahed Hasan'
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

  // Redirects
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },

  // 404 Page
  {
    path: '**',
    component: NotFound,
    title: 'Page Not Found - Zahed Hasan'
  }
];