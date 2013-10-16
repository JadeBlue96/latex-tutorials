---
layout: default
title: "Beginner Equations"
sidebar: practice
base: practice
---

Here is a list of beginner equations:

{% for page in site.pages %}
  {% if page.difficulty == 'beginner' %} - [{{ page.title }}]({{ site.baseurl }}{{ page.url | remove: '.html' }}) {% endif %}
{% endfor %}