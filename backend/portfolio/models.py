from django.db import models
from django_ckeditor_5.fields import CKEditor5Field

class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(
        max_length=50,
        choices=[('leadership', 'Leadership'), ('technical', 'Technical')]
    )
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'name']

    def __str__(self):
        return f"{self.name} ({self.category})"


class Project(models.Model):
    title = models.CharField(max_length=200)
    industry = models.CharField(max_length=100)
    my_role = models.CharField(max_length=100)
    team_size = models.CharField(max_length=50)
    impact_metric = models.CharField(max_length=200)
    description = models.TextField()
    tech = models.JSONField(default=list)
    gradient = models.CharField(max_length=200, blank=True)
    syscomatic_link = models.URLField(max_length=500, blank=True)
    slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    image = models.URLField(max_length=500, blank=True)
    is_featured = models.BooleanField(default=False)
    client_background = models.TextField(blank=True)
    challenge = models.TextField(blank=True)
    approach_solution = CKEditor5Field('Approach & Solution', config_name='extends', blank=True)
    key_features = models.JSONField(default=dict, blank=True)
    impact_detailed = models.JSONField(default=dict, blank=True)
    client_testimonial = models.TextField(blank=True)
    client_testimonial_author = models.CharField(max_length=200, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title


class Testimonial(models.Model):
    quote = models.TextField()
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    country = models.CharField(max_length=100, blank=True)
    rating = models.IntegerField(default=5)
    initials = models.CharField(max_length=5, blank=True)
    color = models.CharField(max_length=20, blank=True)
    video_url = models.URLField(max_length=500, blank=True)
    avatar = models.URLField(max_length=500, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.name} – {self.company}"


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    category = models.CharField(max_length=100)
    date = models.DateField()
    read_time = models.CharField(max_length=50)
    category_color = models.CharField(max_length=100, blank=True)
    slug = models.SlugField(max_length=250, unique=True, null=True, blank=True)
    author = models.CharField(max_length=100, default='Zahed Hasan Rabbi')
    author_role = models.CharField(max_length=100, default='Engineering Manager & Co-Founder')
    author_bio = models.TextField(blank=True)
    image = models.URLField(max_length=500, blank=True)
    content = CKEditor5Field('Content', config_name='extends', blank=True)
    tags = models.JSONField(default=list, blank=True)
    is_featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date', '-id']

    def __str__(self):
        return self.title


class FAQ(models.Model):
    question = models.CharField(max_length=500)
    answer = models.TextField()
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.question


class Experience(models.Model):
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    period = models.CharField(max_length=100)
    is_current = models.BooleanField(default=False)
    highlights = models.JSONField(default=list)
    tech = models.JSONField(default=list)
    company_logo = models.CharField(max_length=500, blank=True)
    company_url = models.URLField(max_length=500, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.role} at {self.company}"


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.subject} from {self.name}"


class Resume(models.Model):
    file = models.FileField(upload_to='resumes/')
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-updated_at']

    def __str__(self):
        return f"Resume updated on {self.updated_at.strftime('%Y-%m-%d')}"


class HomepageContent(models.Model):
    hero_eyebrow = models.CharField(max_length=100, default="Strategy · Engineering · Delivery")
    hero_title = models.CharField(max_length=200, default="Engineering Manager. Scale Architect.")
    hero_description = models.TextField(default="Co-founder at Syscomatic LLC. I lead strategic software delivery, build high-performance distributed systems, and scale engineering organizations.")
    
    summary_eyebrow = models.CharField(max_length=100, default="Executive Summary")
    summary_title = models.CharField(max_length=200, default="Bridging Business Vision With Technical Execution.")
    summary_content = models.TextField(default="Results-oriented Software Engineer with 5+ years of experience...")

    stat_1_value = models.CharField(max_length=50, default="50+")
    stat_1_label = models.CharField(max_length=100, default="Engineers Led")
    
    stat_2_value = models.CharField(max_length=50, default="20+")
    stat_2_label = models.CharField(max_length=100, default="Enterprise Systems Delivered")
    
    stat_3_value = models.CharField(max_length=50, default="5+")
    stat_3_label = models.CharField(max_length=100, default="Global Markets")
    
    stat_4_value = models.CharField(max_length=50, default="10+")
    stat_4_label = models.CharField(max_length=100, default="Years Building")

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Homepage Content"
        verbose_name_plural = "Homepage Content"

    def __str__(self):
        return "Global Homepage Content Configuration"
