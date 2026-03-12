from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProjectViewSet, TestimonialViewSet, BlogPostViewSet,
    FAQViewSet, ExperienceViewSet, SkillViewSet, ContactMessageViewSet, ResumeViewSet,
    HomepageContentViewSet
)

router = DefaultRouter()
router.register(r'projects', ProjectViewSet, basename='project')
router.register(r'testimonials', TestimonialViewSet, basename='testimonial')
router.register(r'blogposts', BlogPostViewSet, basename='blogpost')
router.register(r'faqs', FAQViewSet, basename='faq')
router.register(r'experiences', ExperienceViewSet, basename='experience')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'contact', ContactMessageViewSet, basename='contact')
router.register(r'resumes', ResumeViewSet, basename='resume')
router.register(r'homepage', HomepageContentViewSet, basename='homepage')

urlpatterns = [
    path('', include(router.urls)),
]
