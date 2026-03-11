import os
import django
import json

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from portfolio.models import Project, Testimonial, Skill, BlogPost, FAQ, Experience

def seed():
    # Clear existing projects for clean start
    Project.objects.all().delete()
    
    # --- 1. Urgent Fuel ---
    p1 = Project.objects.create(
        title="Urgent Fuel: Smart IoT-Powered Fuel Delivery",
        industry="Energy, Logistics",
        my_role="Engineering Manager",
        team_size="6 engineers",
        impact_metric="Reduced downtime by 40%",
        description="A smart, automated fuel delivery ecosystem that eliminates manual ordering and ensures high-quality supply.",
        tech=["MQTT", "GSM", "ESP32", "AWS Lambda", "PostgreSQL", "Next.js"],
        gradient="from-amber-500 to-orange-700",
        syscomatic_link="",
        is_featured=True,
        client_background="Urgent Fuel is a modern logistics company on a mission to redefine how fuel is delivered in Bangladesh via On-Demand and Subscription models.",
        challenge="Integrating hardware and software to satisfy both on-demand delivery and automated IoT-triggered refueling for machines that cannot afford downtime.",
        approach_solution="Syscomatic built custom IoT devices (ESP32) for level/density monitoring and a cloud-native dashboard (Next.js/AWS) for real-time logistics and automated dispatch.",
        key_features=[
            "IoT Continuous Monitoring (Fuel Level/Density)",
            "Automated Dispatch Triggers",
            "Predictive Analytics for Refill Forecasting",
            "GPS-Enabled Delivery Tracking"
        ],
        impact_detailed=[
            {"metric": "Generator Downtime", "before": "Frequent", "after": "Reduced by 40%"},
            {"metric": "Delivery Accuracy", "before": "Manual/Error-prone", "after": "100% IoT Automated"},
            {"metric": "Response Time", "before": "3-5 Hours", "after": "Under 45 Minutes"}
        ],
        client_testimonial="Syscomatic transformed our vision into a real, functioning ecosystem. Their ability to merge IoT engineering and software design exceeded expectations.",
        client_testimonial_author="Project Director, Urgent Fuel"
    )

    # --- 2. POC Academy ---
    p2 = Project.objects.create(
        title="POC Academy Exam: Scaling Digital Assessments",
        industry="EdTech",
        my_role="Lead Architect",
        team_size="8 engineers",
        impact_metric="Supported 80,000+ concurrent students",
        description="A robust, cloud-based examination ecosystem optimized for massive real-time traffic and automated grading.",
        tech=["React.js", "Node.js", "Redis", "AWS EC2", "PostgreSQL"],
        gradient="from-blue-600 to-indigo-800",
        syscomatic_link="",
        is_featured=True,
        client_background="POC Academy is a fast-growing EdTech platform focused on high-quality education across Bangladesh.",
        challenge="Supporting 80,000+ concurrent students without lag while ensuring real-time grading and data integrity.",
        approach_solution="Implemented a modular architecture using Node.js for event-driven traffic and Redis for rapid caching, all hosted on auto-scaling AWS infrastructure.",
        key_features=[
            "High-Performance MCQ Engine",
            "Auto-Save & Recovery Mechanism",
            "Role-Based Dashboards (Student/Admin)",
            "Scalable Cloud-Hosted Architecture"
        ],
        impact_detailed=[
            {"metric": "Participation", "before": "Manual/Limited", "after": "80,000+ Concurrent"},
            {"metric": "Uptime", "before": "Frequent Crashes", "after": "99.9% Reliable"},
            {"metric": "Admin Efficiency", "before": "High Manual Work", "after": "60% Time Saved"}
        ],
        client_testimonial="The platform is fast, stable, and incredibly easy to use. What used to take hours is now done in minutes.",
        client_testimonial_author="Operations Lead, POC Academy"
    )

    # --- 3. Onnow ---
    p3 = Project.objects.create(
        title="Onnow: Cloud Kitchen & Virtual Brand Network",
        industry="FoodTech",
        my_role="Engineering Lead",
        team_size="10 engineers",
        impact_metric="125% order growth in launch month",
        description="Complete cloud kitchen technology platform enabling multi-brand virtual restaurants and real-time order routing.",
        tech=["Next.js", "Node.js", "MongoDB", "Docker", "Daphne (WebSockets)"],
        gradient="from-emerald-500 to-teal-700",
        syscomatic_link="",
        is_featured=True,
        client_background="Onnow is a virtual kitchen network operating multiple restaurant brands from shared physical locations.",
        challenge="Coordinating multiple distinct brands in one kitchen with synchronized ticket management and shared inventory tracking.",
        approach_solution="Built an Onion Architecture system with WebSockets for real-time tracking, enabling smart order routing to specific prep stations.",
        key_features=[
            "Kitchen Operations Management",
            "Virtual Menu & Brand Management",
            "Custom Delivery System for Riders",
            "Real-Time Analytics Dashboard"
        ],
        impact_detailed=[
            {"metric": "Order Growth", "before": "New Launch", "after": "125% Month-over-Month"},
            {"metric": "Completion Rate", "before": "65%", "after": "75% (13% Improvement)"},
            {"metric": "Average Order Value", "before": "450 BDT", "after": "600 BDT (33% Growth)"}
        ],
        client_testimonial="Syscomatic built a Ferrari engine for our business. The streamlined status tracking and brand management were game changers.",
        client_testimonial_author="Operations Director, Onnow"
    )
    
    # --- 4. Anydemo (External/Syscomatic) ---
    p4 = Project.objects.create(
        title="Anydemo: AI Music Platform",
        industry="AI, SaaS",
        my_role="Strategic Advisor",
        team_size="4 engineers",
        impact_metric="Real-time voice cloning technology",
        description="AI-powered music creation platform enabling voice cloning and song-to-voice conversion.",
        tech=["Python", "TensorFlow", "React", "FastAPI"],
        gradient="from-purple-600 to-pink-700",
        syscomatic_link="https://syscomatic.com/#portfolio",
        is_featured=False
    )

    print("Successfully seeded rich project data!")

if __name__ == "__main__":
    seed()
