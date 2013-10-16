---
layout: default
title: "Advanced Equations"
sidebar: practice
base: practice
---

Here is a list of advanced equations:

{% for page in site.pages %}
  {% if page.difficulty == 'advanced' %} - [{{ page.title }}]({{ site.baseurl }}{{ page.url | remove: '.html' }}) {% endif %}
{% endfor %}