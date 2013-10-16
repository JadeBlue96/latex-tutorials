---
layout: default
sidebar: documentation
title: "Math Environment"
base: documentation
---

Here is the all important section on Math environments. Within these environments you will be able to typeset mathematics, such as those on the [Practice]({{ site.baseurl }}/practice) pages. There are several Math environments which you can use for which I have listed a few of the most used below. Each have slightly different properties so just switch between them and use which ever suits your needs best in the situation.

We begin with the dollar symbols. You can use the dollar symbol to embed mathematics in line with text. Simply add `$` where you want to begin typing some maths and another `$` when you want to type normally again.

{% highlight latex %}
The function $e^x$ is an increasing function.
{% endhighlight %}

Next we introduce the equation environment, a Math environment which is used to present stand alone equations, that is the equation will be separated from the text.

{% highlight latex %}
\begin{equation}
  \phi(n)= n\prod_{\substack{p \text{ prime } \\ p|n}} \left( 1- \frac{1}{p}\right)
\end{equation}
{% endhighlight %}

This environment will cumulatively number the equations so you can reference them through out your document. If you don't want the equation to be numbered, simply use the `equation*` environment. The asterisk will remove the numbering like in the example below

{% highlight latex %}
\begin{equation*}
  \begin{cases} x\underset{m}{\equiv} a \\ x\underset{n}{\equiv} b \end{cases}
\end{equation*}
{% endhighlight %}

$$ \begin{equation}
  \phi(n)= n\prod_{\substack{p \text{ prime }\\ p|n}} \left( 1- \frac{1}{p}\right)
  \end{equation} $$

Next is the align environment. This is used for maths which spans over several lines and requires alignment to look neat and tidy (in some cases the alignment helps make the maths more clear). For example, long calculations with several steps. In the align environment, use an ampersand in front of what you want to align and a double backslash to define a new line. Here is an example

{% highlight latex %}
\begin{align}
  a(b+c)^2  &=  a(b^2 + 2bc + c^2)  \\
            &=  ab^2 + 2abc + ac^2
\end{align}
{% endhighlight %}

$$ \begin{equation*}
  \begin{cases} x\underset{m}{\equiv} a \\ x\underset{n}{\equiv} b \end{cases}
  \end{equation*} $$

So in the above example, the equals symbols will line up so the calculation steps are clear and easy to follow. Each line will be numbered cumulatively much like the equation environment. To prevent this, use the `align*` environment. 

{% highlight latex %}
\begin{align*}
  a(b+c)^2  &=  a(b^2 + 2bc + c^2)  \\
            &=  ab^2 + 2abc + ac^2
\end{align*}
{% endhighlight %}

$$ \begin{align*}
  a(b+c)^2  &=  a(b^2 + 2bc + c^2)  \\
              &=  ab^2 + 2abc + ac^2
              \end{align*} $$

You can align most symbols. Here is another example where we align the `\geq` symbol the equals symbol.

{% highlight latex %}
\begin{align*}
  (b+c)^2  &=     b^2 + 2bc + c^2 \\
           &\geq  b^2 + c^2       \\
\end{align*}
{% endhighlight %}

$$ \begin{align*}
  (b+c)^2  &=     b^2 + 2bc + c^2 \\
             &\geq  b^2 + c^2       \\
             \end{align*} $$

The align environment allows you to align multiple symbols in any line, though be sure to have the same number of ampersands in each line or your document will not compile. If you do this, you will likely want some of your alignments to be blank, to achieve this use `\quad`. This is a blank space in essence. It will not show up as anything and is a useful snippet of code to remember. This affect is hard to explain so here is an example

{% highlight latex %}
\begin{align*}
  a &= b   &\quad  \\
    &= c   &= d    \\
    &\quad &= e    \\
    &\quad &= g    \\
\end{align*}
{% endhighlight %}

$$ \begin{align*}
  a &= b   &\quad  \\
      &= c   &= d    \\
          &\quad &= e    \\
              &\quad &= g    \\
              \end{align*} $$

As you can see this method of alignment is often tricky to get looking good so use it sparingly until you become more familiar with LaTeX, by which time you would have learnt to fix (or botch) the above code to make it more aesthetically pleasing.
