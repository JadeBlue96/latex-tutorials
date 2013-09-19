---
layout: default
sidebar: documentation
title: "Table of Contents"
base: documentation
---

Creating a Table of Contents for your document is really simple. Just enter this command after the `\begin{document}` line.

{% highlight latex %}
\tableofcontents
{% endhighlight %}

It will automatically update itself every time you compile the document. The titles and page numbers are taken from the section headings (and any subheadings etc).

#### Quick Tips
If you want to limit the depth of the table of contents, use the following

{% highlight latex %}
\setcounter{tocdepth}{number}
{% endhighlight %}

where `number` is the number of section levels you require. To give an example, if you have

{% highlight latex %}
\setcounter{tocdepth}{2}
{% endhighlight %}

the table of contents will only display headings from the sections and subsections, but no deeper.
