---
layout: default
sidebar: learn
title: "Basic Text Structures"
base: learn
---

Any text entered between the

{% highlight latex %}
\begin{document}
...
\end{document}
{% endhighlight %}

tags will be appear in the compiled LaTeX document, in most cases. The final document will most likely be a PDF file.

Use line breaks to create new paragraphs:

{% highlight latex %}
\begin{document}
Paragraph one is awesome. 

But paragraph two will beg to differ.
\end{document}
{% endhighlight %}

Simple text formatting includes

- `\textbf{Bold text}`
- `\textsc{Small caps}`
- `\texttt{Typewriter text}`
- `\emph{Emphasized or italic text}`

For more document options, text formatting, and text environments visit [the documentation]({{ site.baseurl }}/documentation).