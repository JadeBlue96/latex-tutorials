---
layout: default
sidebar: documentation
title: Lists
base: documentation
---

There are many types of lists in LaTeX. However, they all are used in the same way.

{% highlight latex %}
\begin{style}
  \item First item
  \item Second item
  \item Another item
\end{style}
{% endhighlight %}

<dl>
	<dt>style</dt>
		<dd>This environment parameter defines which list style is used. See the table below for just a few types of styles.</dd>
</dl>

<table>
	<tr>
		<th>Environment</th>
		<th>Description</th>
	</tr>
	<tr>
		<td>enumerate</td>
		<td>Numbers items in ascending order</td>
	</tr>
	<tr>
		<td>itemize</td>
		<td>Uses conventional bullet points</td>
	</tr>
	<tr>
		<td>description</td>
		<td>Allows for custom names for each list item. Use like `\item[name]`</td>
	</tr>
</table>

#### Customising Lists

If you require more control over the lists, you can use the `enumerate` package. Place the next command in the header of your LaTeX document

{% highlight latex %}
\usepackage{enumerate}
{% endhighlight %}
 
One basic use case would be to define the list to use counters such as `(a)`, `(b)`, `(c)`, `...`

{% highlight latex %}
\begin{enumerate}[(a)]
  \item First item
  \item Second item
  \item Another item
\end{enumerate}
{% endhighlight %}

#### Quick Tips

To start the list counter from a different number than 1, place the following command after you begin the list environment:

{% highlight latex %}
\setcounter{enumi}{counter}
{% endhighlight %}

Where `counter` is an integer. It defines the starting number of the list, for example, if `counter` was set to 3, the list will start at 4.

To skip a number, use the following:

{% highlight latex %}
\stepcounter{enumi}
{% endhighlight %}
