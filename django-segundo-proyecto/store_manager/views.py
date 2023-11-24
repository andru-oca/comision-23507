from django.views.generic import TemplateView


class Index(TemplateView):
    extra_context = {"comision": "23507"}
    template_name = "index.html"
