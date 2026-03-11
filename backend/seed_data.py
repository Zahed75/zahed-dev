import os
import django
import json
from datetime import datetime

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Project, Testimonial, BlogPost, FAQ, Experience, Skill

def seed_data():
    # --- Clear Existing Data (Optional - use with caution) ---
    # Project.objects.all().delete()
    # BlogPost.objects.all().delete()
    # Testimonial.objects.all().delete()
    # Skill.objects.all().delete()

    # --- Skills — Strategic & Technical Tracks ---
    leadership_skills = [
        'Engineering Management', 'Organizational Scaling', 'Product Strategy',
        'SDaaS Implementation', 'Architectural Integrity', 'Technical Hiring',
        'Operational Excellence', 'Stakeholder Management', 'Risk Mitigation'
    ]
    for name in leadership_skills:
        Skill.objects.get_or_create(name=name, category='leadership')

    technical_skills = [
        'Distributed Systems', 'Cloud Native Architecture', 'Django REST Ecosystem',
        'Angular Enterprise', 'Flutter Ecosystem', 'PostgreSQL / MySQL', 
        'Docker & Kubernetes', 'CI/CD Pipelines (GitHub Actions/DevOps)', 'SEO/GEO Implementation'
    ]
    for name in technical_skills:
        Skill.objects.get_or_create(name=name, category='technical')

    # --- Projects — High-Impact Case Studies ---
    projects = [
        {
            'title': 'Urgent Fuel: Automating Energy Logistics at Scale',
            'slug': 'urgent-fuel-iot-fuel-delivery',
            'industry': 'Energy, Logistics',
            'my_role': 'Engineering Manager & Strategic Advisor',
            'team_size': '8-member Cross-functional Team',
            'impact_metric': '99.9% Uptime · 40% Operational Efficiency Gain',
            'description': 'Architecting an IoT-powered fuel delivery ecosystem using SDaaS principles to eliminate manual bottlenecks in Dhaka\'s energy sector.',
            'tech': ['Django REST', 'Angular Enterprise', 'Flutter', 'IoT Integration', 'PostgreSQL'],
            'gradient': 'from-neutral-900 via-neutral-800 to-black',
            'syscomatic_link': 'https://syscomatic.com/#portfolio',
            'is_featured': True,
            'image': 'https://syscomatic.com/assets/images/portfolio/urgent-fuel.jpg',
            'client_background': 'Urgent Fuel is a Tier-1 energy logistics provider disrupting the fuel supply chain through real-time automation and predictive monitoring.',
            'challenge': 'Severe data fragmentation and lack of real-time visibility into fuel levels led to significant inventory loss and unpredictable delivery timelines.',
            'approach_solution': 'Developed a unified monitoring hub integrating IoT sensors with a high-performance backend, complemented by specialized logistics apps for real-time dispatch control.',
            'key_features': [
                'Proprietary IoT Sensor Integration (Real-time)',
                'Automated Dispatch & Route Optimization Engine',
                'White-label Customer Experience Apps (Flutter)',
                'Executive Analytics Dashboard for Operational Control'
            ],
            'impact_detailed': [
                'Reduced fuel wastage by 25% via precision monitoring',
                'Increased delivery fleet throughput by 35% in Q1',
                'Established enterprise-grade security for fuel transaction data'
            ],
            'client_testimonial': 'Zahed’s leadership transformed a complex technical challenge into a scalable business asset. The architecture is world-class.',
            'client_testimonial_author': 'Managing Director, Urgent Fuel'
        },
        {
            'title': 'POC Academy: Architecting a Global LMS Ecosystem',
            'slug': 'poc-academy-edtech-lms',
            'industry': 'EdTech / Professional Certification',
            'my_role': 'Lead Software Architect',
            'team_size': '6 engineers, 2 Quality Analysts',
            'impact_metric': '15,000+ Active Learners · 95% Completion Rate',
            'description': 'Engineering a multi-tenant, high-concurrency Learning Management System for professional certifications across South Asia.',
            'tech': ['Angular', 'Django REST', 'AWS Cloud Architecture', 'MySQL Enterprise'],
            'gradient': 'from-neutral-100 to-neutral-300',
            'syscomatic_link': 'https://syscomatic.com/#portfolio',
            'is_featured': True,
            'image': 'https://syscomatic.com/assets/images/portfolio/poc-academy.jpg',
            'client_background': 'POC Academy provides high-stakes professional certification training requiring 100% platform availability and robust anti-cheat mechanisms.',
            'challenge': 'The previous system failed under high concurrency during exam periods, resulting in data loss and learner frustration.',
            'approach_solution': 'Re-architected the platform for horizontal scalability on AWS, implementing a micro-frontend approach with Angular for a zero-latency learning interface.',
            'key_features': [
                'High-Concurrency Examination Engine',
                'Multi-tenant Organization Management Support',
                'Automated Certificate Generation & Verification',
                'Interactive Live Class Ecosystem via WebRTC'
            ],
            'impact_detailed': [
                'Maintained 100% uptime during peak exam cycles (5,000+ concurrent)',
                'Reduced server overhead by 60% via specialized caching strategies',
                'Integrated end-to-end payment automation for global enrollment'
            ],
            'client_testimonial': 'The reliability of POC Academy today is a direct result of Zahed’s architectural vision and the Syscomatic team’s execution.',
            'client_testimonial_author': 'CTO, POC Academy'
        },
        {
            'title': 'Onnow: Scaling the Future of Dark Kitchens',
            'slug': 'onnow-dark-kitchen-saas',
            'industry': 'FoodTech / SaaS Ecosystem',
            'my_role': 'Co-founder & Product Strategist',
            'team_size': 'Managed 10+ Engineers & Designers',
            'impact_metric': '60+ Virtual Brands · 3x Growth in Year 1',
            'description': 'Building the technical backbone for a virtual food brand network, optimizing order flow and inventory intelligence.',
            'tech': ['Node.js Ecosystem', 'Modern React', 'Dockerized Infrastructure', 'MongoDB'],
            'gradient': 'from-neutral-900 to-neutral-700',
            'syscomatic_link': 'https://syscomatic.com/#portfolio',
            'is_featured': True,
            'image': 'https://syscomatic.com/assets/images/portfolio/onnow.jpg',
            'client_background': 'Onnow represents the next generation of food hospitality, focusing on capital-light, technology-heavy virtual kitchen infrastructure.',
            'challenge': 'Manual order reconciliation across multiple food delivery platforms was causing 15% error rates in kitchen fulfillment.',
            'approach_solution': 'Engineered a unified POS & Order Management System (OMS) that centralizes orders from multiple channels into a single kitchen workflow.',
            'key_features': [
                'Unified Multi-channel Order Hub',
                'Predictive Inventory & Stock Management Intelligence',
                'Brand Performance Analytics for Virtual Operators',
                'Automated Fulfillment Tracking via API Integrations'
            ],
            'impact_detailed': [
                'Reduced order error rate from 15% to less than 1%',
                'Enabled rapid scaling from 5 to 60+ brands in 12 months',
                'Optimized kitchen labor costs by 20% via workflow automation'
            ],
            'client_testimonial': 'Onnow’s rapid expansion was only possible because our tech stack was built for scale from day one.',
            'client_testimonial_author': 'Founder & CEO, Onnow'
        }
    ]
    for p in projects:
        Project.objects.update_or_create(slug=p['slug'], defaults=p)

    # --- Testimonials — Strategic Trust ---
    testimonials = [
        {
            'quote': 'Zahed and the Syscomatic team delivered our entire retail management ecosystem ahead of schedule. The architectural integrity and communication were exceptional.',
            'name': 'Arif Rahman',
            'role': 'CTO',
            'company': 'ACI Logistics Ltd.',
            'country': 'Bangladesh',
            'rating': 5,
            'initials': 'AR',
            'color': '#000000',
            'video_url': ''
        },
        {
            'quote': 'Redesigning our field operations with Zahed was a strategic turning point. The Flutter ecosystem they built has transformed our national outlet management.',
            'name': 'Sarah Mitchell',
            'role': 'VP Operations',
            'company': 'TechRetail Group',
            'country': 'United States',
            'rating': 5,
            'initials': 'SM',
            'color': '#000000'
        }
    ]
    for t in testimonials:
        Testimonial.objects.update_or_create(name=t['name'], company=t['company'], defaults=t)

    # --- Blog Posts — Engineering Strategy ---
    blogs = [
        {
            'title': 'From Solo Dev to Engineering Manager: Scaling a Global Agency',
            'slug': 'how-i-built-global-software-agency-dhaka',
            'excerpt': 'The transition from technical individual contributor to strategic founder — lessons in building Syscomatic LLC.',
            'category': 'Founder Strategy',
            'date': '2026-03-01',
            'read_time': '8 min read',
            'category_color': 'border-black text-black',
            'author': 'Zahed Hasan Rabbi',
            'author_role': 'Founder & EM',
            'author_bio': 'Engineering Manager and Co-founder of Syscomatic LLC, specializing in high-performance team building and SDaaS delivery.',
            'image': 'https://syscomatic.com/assets/images/blog/founder-story.jpg',
            'content': 'Building a global agency from Dhaka required more than code; it required building an ecosystem of trust and architectural excellence...'
        },
        {
            'title': 'The Architecture of Scale: Managing Distributed Teams',
            'slug': 'engineering-management-scaling-remote-teams',
            'excerpt': 'Managing engineering complexity across timezones while maintaining high velocity and operational integrity.',
            'category': 'Leadership',
            'date': '2026-03-08',
            'read_time': '12 min read',
            'category_color': 'border-black text-black',
            'author': 'Zahed Hasan Rabbi',
            'author_role': 'Engineering Manager',
            'author_bio': 'Zahed leads engineering at Syscomatic, focusing on cloud-native systems and organizational excellence.',
            'image': 'https://syscomatic.com/assets/images/blog/remote-management.jpg',
            'content': 'Effective engineering management in a remote-first world is about outcomes, accountability, and radical transparency...'
        }
    ]
    for b in blogs:
        BlogPost.objects.update_or_create(slug=b['slug'], defaults=b)

    # --- Strategic FAQ ---
    faqs = [
        {
            'question': 'How does Zahed Hasan approach engineering leadership?',
            'answer': 'Zahed focuses on bridging technical execution with business strategy, ensuring that engineering teams are not just delivery units, but value-driving partners for global organizations.',
        },
        {
            'question': 'What is the core mission of Syscomatic LLC?',
            'answer': 'Founded by Zahed, Syscomatic LLC empowers startups and enterprises through Software Development as a Service (SDaaS), providing high-conviction engineering talent and strategic technical advisory.',
        }
    ]
    for f in faqs:
        FAQ.objects.get_or_create(question=f['question'], defaults=f)

    # --- Leadership Experience ---
    experiences = [
        {
            'company': 'Syscomatic LLC',
            'role': 'Engineering Manager & Co-founder',
            'period': '2020 – Present',
            'is_current': True,
            'highlights': [
                'Co-founded and scaled a global software delivery organization serving clients across 5+ countries.',
                'Leading architecture and engineering strategy for business-critical SaaS and IoT ecosystems.',
                'Directing cross-functional teams of 10+ engineers through modern SDLC and SDaaS paradigms.'
            ],
            'tech': ['Distributed Systems', 'Cloud Architecture', 'SaaS Strategy', 'Team Leadership'],
            'company_logo': 'assets/brands/sysco.png',
        }
    ]
    for e in experiences:
        Experience.objects.update_or_create(company=e['company'], role=e['role'], defaults=e)

    print("Seeding complete with high-conviction Founder content!")

if __name__ == '__main__':
    seed_data()
