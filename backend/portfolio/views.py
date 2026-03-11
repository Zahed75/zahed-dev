from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Project, Testimonial, BlogPost, FAQ, Experience, Skill, ContactMessage, Resume
from .serializers import (
    ProjectSerializer, TestimonialSerializer, BlogPostSerializer,
    FAQSerializer, ExperienceSerializer, SkillSerializer, ContactMessageSerializer, ResumeSerializer
)
import logging

logger = logging.getLogger(__name__)


class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        qs = Project.objects.all()
        is_featured = self.request.query_params.get('is_featured')
        if is_featured is not None:
            qs = qs.filter(is_featured=is_featured.lower() == 'true')
        return qs


class TestimonialViewSet(viewsets.ModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer


class BlogPostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        qs = BlogPost.objects.all()
        category = self.request.query_params.get('category')
        if category and category != 'All':
            qs = qs.filter(category__iexact=category)
        is_featured = self.request.query_params.get('is_featured')
        if is_featured is not None:
            qs = qs.filter(is_featured=is_featured.lower() == 'true')
        return qs


class FAQViewSet(viewsets.ModelViewSet):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class ExperienceViewSet(viewsets.ModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

    def perform_create(self, serializer):
        instance = serializer.save()
        logger.info(f"New Contact: {instance.name} <{instance.email}> — {instance.subject}")

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.filter(is_active=True).order_by('-updated_at')
    serializer_class = ResumeSerializer
