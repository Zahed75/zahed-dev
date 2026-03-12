from .models import Project, Testimonial, BlogPost, FAQ, Experience, Skill, ContactMessage, Resume, HomepageContent
from django.core.mail import send_mail
from django.conf import settings
from .serializers import (
    ProjectSerializer, TestimonialSerializer, BlogPostSerializer,
    FAQSerializer, ExperienceSerializer, SkillSerializer, ContactMessageSerializer, ResumeSerializer,
    HomepageContentSerializer
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
        
        # Send SMTP Email Notification
        try:
            subject = f"New Portfolio Inquiry: {instance.subject}"
            message = f"You have a new message from {instance.name} ({instance.email}):\n\n{instance.message}"
            recipient_list = ['tech.syscomatic@gmail.com'] # Admin email
            
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                recipient_list,
                fail_silently=False,
            )
            logger.info("Email notification sent successfully.")
        except Exception as e:
            logger.error(f"Failed to send email notification: {str(e)}")

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.filter(is_active=True).order_by('-updated_at')
    serializer_class = ResumeSerializer

class HomepageContentViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = HomepageContentSerializer
    
    def get_queryset(self):
        return HomepageContent.objects.all()

    def list(self, request, *args, **kwargs):
        # Always return the first (and only) instance, or a default one
        instance = HomepageContent.objects.first()
        if not instance:
            return Response({})
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
