---
layout: default
sidebar: learn
title: "Typing Maths"
base: learn
---

To type _inline_ equations, use a pair of dollar signs

{% highlight latex %}
Fermat's Last Theorem states that no positive integers $a,b,c$ satisfies $a^n + b^n = c^n$ for any integer $n$ greater than two.
{% endhighlight %}

This, once compiled, it will look like thus

> Fermat's Last Theorem states that no positive integers $$a,b,c$$ satisfies $$a^n + b^n = c^n$$ for any integer $$n$$ greater than two.

The above example also uses the carat (`^`) symbol. This is a special symbol in LaTeX: it renders the right operator as a superscript. It's natural partner would be the underscore (`_`), which creates a subscript. For example,

{% highlight latex %}
a_0, a_1, a_2, \ldots
{% endhighlight %}

becomes

$$ a_0, a_1, a_2, \ldots $$

A more complicated example is the following. See if you can imagine what it will look like first.

{% highlight latex %}
e^z = 1 + \sum^\infty_{n=1} \frac{z^n}{n!} = 1 + \sum^\infty_{n=1} \left( \prod^n_{j=1} \frac{z}{j} \right)
{% endhighlight %}

$$ e^z = 1 + \sum^\infty_{n=1} \frac{z^n}{n!} = 1 + \sum^\infty_{n=1} \left( \prod^n_{j=1} \frac{z}{j} \right) $$

This example works best as a _displayed_ equation. This means it is placed on a new line, with extra spaced around it. To do this, we write the maths within `\[ ... \]` tags, or use the `equation` environment.

{% highlight latex %}
\begin{equation}
  1 + 1 = 2
\end{equation}
{% endhighlight %}

There are many more math environments to use. Find out more in the [documentation]({{ site.baseurl }}/documentation/math-environment).