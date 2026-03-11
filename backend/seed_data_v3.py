import os
import django
import sys
from datetime import date

# Setup Django environment
sys.path.append(os.path.dirname(os.path.abspath(__file__)))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Project, Testimonial, BlogPost, FAQ, Experience, Skill

def seed_data():
    print("Clearing existing data...")
    Project.objects.all().delete()
    Testimonial.objects.all().delete()
    BlogPost.objects.all().delete()
    FAQ.objects.all().delete()
    Experience.objects.all().delete()
    Skill.objects.all().delete()

    print("Seeding Skills...")
    leadership_skills = [
        "Engineering Management", "Backend Migrations", "Process Automation",
        "Cost Optimization", "CI/CD Implementation", "Microservices Architecture",
        "Agile Methodology", "Cross-Functional Leadership"
    ]
    for i, name in enumerate(leadership_skills):
        Skill.objects.create(name=name, category='leadership', order=i)

    technical_skills = [
        "Django & Django REST", "Node.js & Express.js", "Flutter & Dart",
        "Angular", "PostgreSQL", "MySQL", "MongoDB", "Docker"
    ]
    for i, name in enumerate(technical_skills):
        Skill.objects.create(name=name, category='technical', order=i)

    print("Seeding Experiences...")
    Experience.objects.create(
        company="ACI Logistic Ltd.",
        role="Software Engineer Level-II",
        period="May 2025 - Jan 2026",
        is_current=True,
        order=1,
        highlights=[
            "Flutter App Development for ACI Logistics to enhance customer experience and streamline operations.",
            "Backend & API Integration for real-time order, inventory, and logistics management.",
            "Improved retail operations efficiency for Shwapno, Bangladesh's largest retail chain."
        ],
        tech=["Flutter", "Django", "PostgreSQL", "Logistics Systems"]
    )
    
    Experience.objects.create(
        company="Best Electronics Ltd",
        role="Deputy Manager (Software Engineer)",
        period="Jan 2024 - Mar 2025",
        is_current=False,
        order=2,
        highlights=[
            "Led backend development, CI/CD pipeline integrations, and Docker implementation, enhancing deployment efficiency.",
            "Optimized operational costs by 30% by automating order and delivery systems for Group ERP & Vcom Ecommerce, improving business efficiency."
        ],
        tech=["Django", "Docker", "CI/CD", "ERP Systems"]
    )

    Experience.objects.create(
        company="Syscomatic Technologies Ltd",
        role="Software Engineer",
        period="May 2020 - Dec 2023",
        is_current=False,
        order=3,
        highlights=[
            "Delivered high-performance APIs ensuring 99.9% reliability and scalability across distributed systems.",
            "Modernized workflows via Kubernetes, Docker, and AWS to enable continuous delivery and reduce downtime.",
            "Optimized RDS database interactions to ensure data integrity and high-load performance."
        ],
        tech=["Python", "AWS", "Docker", "Kubernetes", "RDS"]
    )

    print("Seeding Projects...")
    Project.objects.create(
        title="ACI Logistics Ltd - Real-Time Audit & Inspection",
        industry="Retail & Logistics",
        my_role="Lead Software Engineer",
        team_size="Enterprise Deployment",
        impact_metric="99% reduction in audit processing time",
        description="A real-time, cross-platform mobile and web application suite designed to digitize and streamline the operational audit, outlet inspection, and zonal assessment processes for a major retail chain with 700+ outlets.",
        tech=["Flutter", "Riverpod", "Angular 19", "Django REST API", "PostgreSQL"],
        slug="aci-logistics-audit-platform",
        image="https://images.unsplash.com/photo-1586528116311-ad8ed7c1590a?q=80&w=1000&auto=format&fit=crop",
        is_featured=True,
        order=1,
        client_background="A major retail chain (Shwapno) with 700+ outlets looking to centralize and automate field operations.",
        challenge="The system relied on error-prone manual reporting causing a 24-hour reporting delay and lacking live insights into field operations, asset conditions, and vendor pricing.",
        approach_solution="Engineered a live location tracking system using Google Maps API. Implemented a resilient offline-first mobile architecture using Hive DB enabling seamless data synchronization in low-connectivity areas.",
        key_features={
            "features": [
                "Real-Time GPS Integration for monitoring zonal managers",
                "Offline-First Architecture using Hive DB",
                "Scalable Infrastructure supporting 700+ outlets and concurrent media uploads"
            ],
            "links": [
                {"label": "Mobile App Repo", "url": "#"},
                {"label": "Live Admin", "url": "#"}
            ]
        },
        impact_detailed={
            "metrics": [
                "Achieved a 99% reduction in audit processing time",
                "Significantly improved data accuracy for enterprise decisions",
                "Eliminated the previous 24-hour reporting delay"
            ]
        }
    )

    Project.objects.create(
        title="Onnow Impact-Driven Cloud Kitchen",
        industry="Food & Beverage",
        my_role="Backend Systems Engineer",
        team_size="Cross-Functional Team",
        impact_metric="Optimized virtual menu integration & revenue",
        description="Developed a cloud kitchen solution for restaurant chains, optimizing virtual menu management and revenue growth. Implemented a multi-tenant architecture with role-based access and automated analytics.",
        tech=["Express.js", "MongoDB", "Docker", "Redis", "aamarPay", "SSLWireless", "GitHub Actions"],
        slug="onnow-cloud-kitchen",
        image="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
        is_featured=True,
        order=2,
        client_background="Restaurant chains wanting to expand virtual operations without massive overhead.",
        challenge="Handling multi-tenant logic, secure payments, and diverse delivery integrations seamlessly.",
        approach_solution="Architected a scalable Node.js/Express.js backend utilizing Redis caching and automated CI/CD for zero-downtime updates.",
        key_features={
            "features": [
                "Multi-tenant architecture with role-based access",
                "Automated analytics reporting",
                "Secure payment gateway integrations (aamarPay, SSLWireless)"
            ],
            "links": [
                {"label": "API Doc", "url": "#"},
                {"label": "Cloud Infrastructure", "url": "#"},
                {"label": "Database ERD", "url": "#"}
            ]
        },
        impact_detailed={
            "metrics": [
                "Enhanced strategic insights through automated data pipelines",
                "Improved end-to-end delivery tracking",
                "High availability architecture"
            ]
        }
    )

    Project.objects.create(
        title="VCom Ecommerce Platform",
        industry="Ecommerce",
        my_role="Backend Developer",
        team_size="Internal Engineering",
        impact_metric="30% Operational Cost Reduction",
        description="Led development of the VCom backend, enhancing user experience and backend efficiency. Built a scalable backend with secure payment integration for seamless transactions.",
        tech=["Django", "Docker", "PostgreSQL", "CI/CD"],
        slug="vcom-ecommerce-platform",
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
        is_featured=False,
        order=3,
        client_background="Best Electronics Ltd required an automated system for Group ERP and Vcom Ecommerce.",
        challenge="Migrating from manual to automated systems without disrupting existing logistical constraints.",
        approach_solution="Designed automated pipelines cutting delivery and order processing times significantly, supported by a scalable structural backend.",
        key_features={
            "features": [
                "Secure automated payment systems",
                "Automated order routing and delivery systems",
                "Group ERP synchronization"
            ],
            "links": [
                {"label": "Beta UI", "url": "#"},
                {"label": "API Doc", "url": "#"},
                {"label": "Admin App", "url": "#"}
            ]
        },
        impact_detailed={
            "metrics": [
                "Cut operational costs by 30%",
                "Streamlined order to delivery timeline",
                "Seamless migration from manual systems"
            ]
        }
    )

    print("Seeding Blog Posts...")
    # Add dummy Advisory blogs
    BlogPost.objects.create(
        title="Scaling Architecture: From Monolith to Distributed Microservices",
        excerpt="An executive guide to untangling legacy monolithic constraints and designing scalable, fault-tolerant microservice environments.",
        category="Advisory",
        date=date(2025, 10, 1),
        read_time="5 min read",
        slug="scaling-architecture-advisory",
        tags=["Architecture", "Executive", "Kubernetes"],
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        is_featured=True,
        content="<h2>Advisory Consulting: Systems Architecture</h2><p>This is a dummy advisory post specifically fetched for the speaking/advisory section. In real engagements we analyze network latency, evaluate data constraints, and map team topologies to the new technical landscape.</p>"
    )

    BlogPost.objects.create(
        title="Engineering Organization Design for Startups",
        excerpt="The critical pivot from isolated developers to fully autonomous Software Delivery as a Service (SDaaS) pods.",
        category="Advisory",
        date=date(2025, 9, 15),
        read_time="7 min read",
        slug="engineering-org-design",
        tags=["Leadership", "SDaaS", "Scaling"],
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        is_featured=False,
        content="<h2>Structuring Teams for Velocity</h2><p>Dummy advisory content explaining team structure models like the Spotify model, Conway's Law, and establishing clear spheres of bounded context for developer teams.</p>"
    )

    BlogPost.objects.create(
        title="Building Offline-First Mobile Deployments",
        excerpt="Technical deep dive into utilizing Hive DB and Riverpod to guarantee uptime for remote workers lacking stable network connectivity.",
        category="Engineering",
        date=date(2025, 8, 20),
        read_time="4 min read",
        slug="offline-first-mobile-deployments",
        tags=["Flutter", "Dart", "Architecture"],
        image="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1000&auto=format&fit=crop",
        is_featured=False,
        content="<h2>Offline Synchronization Patterns</h2><p>This technical article breaks down the ACI operations model covering conflict resolution strategies and event-driven data pushing.</p>"
    )

    print("Seeding FAQs...")
    faqs = [
        {"question": "What is your main technical stack?", "answer": "I specialize in Django (Python), Node.js, and Flutter. I architect backends with PostgreSQL and distribute payloads heavily using AWS, Docker, and CI/CD pipelines."},
        {"question": "Are you available for consulting?", "answer": "Yes, I provide advisory services focusing on System Architecture, Engineering Team Design, and CI/CD/DevOps integrations for scaling teams."},
        {"question": "How do you handle backend migrations?", "answer": "Strategic risk mitigation. We map all old API surfaces, write regression tests automatically covering payload definitions, and implement strangler fig patterns to minimize downtime during the cut-over."}
    ]
    for i, faq in enumerate(faqs):
        FAQ.objects.create(question=faq['question'], answer=faq['answer'], order=i)

    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_data()
