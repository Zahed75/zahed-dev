from django.contrib import admin
from .models import Project, Testimonial, BlogPost, FAQ, Experience, Skill, ContactMessage, Resume, HomepageContent


@admin.register(HomepageContent)
class HomepageContentAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'updated_at']
    
    # Simple singleton pattern: prevent adding new ones if one already exists
    def has_add_permission(self, request):
        if self.model.objects.exists():
            return False
        return True

    fieldsets = (
        ('Hero Section', {
            'fields': ('hero_eyebrow', 'hero_title', 'hero_description')
        }),
        ('Executive Summary', {
            'fields': ('summary_eyebrow', 'summary_title', 'summary_content')
        }),
        ('Statistics', {
            'fields': (
                ('stat_1_value', 'stat_1_label'),
                ('stat_2_value', 'stat_2_label'),
                ('stat_3_value', 'stat_3_label'),
                ('stat_4_value', 'stat_4_label'),
            )
        }),
    )


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'industry', 'my_role', 'is_featured', 'order']
    list_filter = ['is_featured', 'industry']
    search_fields = ['title', 'description', 'client_background']
    list_editable = ['is_featured', 'order']
    prepopulated_fields = {'slug': ('title',)}
    ordering = ['order']
    fieldsets = (
        ('Basic Info', {
            'fields': ('title', 'industry', 'my_role', 'team_size', 'impact_metric',
                       'description', 'image', 'slug', 'is_featured', 'order')
        }),
        ('Rich Case Study', {
            'fields': ('client_background', 'challenge', 'approach_solution',
                       'key_features', 'impact_detailed')
        }),
        ('Testimonial', {
            'fields': ('client_testimonial', 'client_testimonial_author')
        }),
        ('Tech & Links', {
            'fields': ('tech', 'syscomatic_link', 'gradient')
        }),
    )


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'company', 'rating', 'order']
    list_editable = ['order']
    search_fields = ['name', 'company', 'quote']
    ordering = ['order']


@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'author', 'date', 'is_featured']
    list_filter = ['category', 'is_featured', 'date', 'author']
    search_fields = ['title', 'excerpt', 'content', 'author']
    list_editable = ['is_featured']
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'date'
    ordering = ['-date']
    fieldsets = (
        ('Content', {
            'fields': ('title', 'slug', 'excerpt', 'content', 'image', 'tags')
        }),
        ('Meta', {
            'fields': ('category', 'date', 'read_time', 'is_featured', 'category_color')
        }),
        ('Author', {
            'fields': ('author', 'author_role', 'author_bio')
        }),
    )


@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ['question', 'order']
    list_editable = ['order']
    ordering = ['order']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['company', 'role', 'period', 'is_current', 'order']
    list_editable = ['is_current', 'order']
    ordering = ['order']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'order']
    list_filter = ['category']
    list_editable = ['order']
    ordering = ['category', 'order']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read']
    list_editable = ['is_read']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    ordering = ['-created_at']

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'is_active', 'updated_at']
    list_filter = ['is_active']
    list_editable = ['is_active']
    readonly_fields = ['updated_at']
