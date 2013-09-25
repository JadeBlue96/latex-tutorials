---
layout: default
sidebar: learn
title: "Getting Started"
base: learn
---

If you do not have a working LaTeX installation, head over to the [documentation]({{ site.baseurl }}/documentation/installing-latex) for instructions to get set up.

The following code snippet is a minimal example required to produce a valid LaTeX document.

{% highlight latex %}
\documentclass{article}
\begin{document}
    Hello World!
\end{document}
{% endhighlight %}

Let us now break it down. The first line forms part of the __preamble__ or __header__. Any meta data (author, title) or styling settings (margins, text size) are placed here at the top of the file. In this case, we declare our document to be an _article_. Note that other [document classes exist]({{ site.baseurl }}/documentation/document-structure).

The next few lines provides an example of a __text environment__. In this case, we have the _document_ text environment which contains all the content for our LaTeX document.

From this small example, we begin to see how LaTeX separates content from styling.