---
layout: default
sidebar: documentation
title: Labels
base: documentation
---

Throughout your document, you may want to refer back to a previous definition, or even an image. Of course, you can just copy the definition number, but what if you decide later you want another definition before that? The numbering system on LaTeX is automatic, which then means you are referencing the wrong definition!

To solve this problem, and save you from much trouble later on, we can use labels to give pretty much anything a name. This name won't show up in the document so you can name things anything you want!

Let's set the scene. Here's a definition:

{% highlight latex %}
\begin{definition}
  \label{def:name}
  Definition goes here
\end{definition}
{% endhighlight %}

Notice the extra line with `\label{def:name}`.

To reference this definition, use

{% highlight latex %}
\ref{def:name}
{% endhighlight %}

where the text inside `\ref{}` is the same as the text inside `\label{}`.

Labelling images works in exactly the same way.

{% highlight latex %}
\begin{figure}[htb]
  \centering
  \includegraphics{image.png}
  \caption{The caption for this image}
  \label{fig:image}
\end{figure}
{% endhighlight %}

Reference the image just like before.

{% highlight latex %}
\ref{fig:image}
{% endhighlight %}

This part is entirely optional, but you may want to use the following conventions when naming objects. It just allows you to identify objects quickly, making your workflow just that little bit more efficient.

<table>
	<tr>
		<th>Prefix</th>
		<th>Object</th>
	</tr>
	<tr>
		<td><code>sec:</code></td>
		<td>Section</td>
	</tr>
	<tr>
		<td><code>sub:</code></td>
		<td>Subsection</td>
	</tr>
	<tr>
		<td><code>def:</code></td>
		<td>Definition</td>
	</tr>
	<tr>
		<td><code>thm:</code></td>
		<td>Theorem</td>
	</tr>
	<tr>
		<td><code>prop:</code></td>
		<td>Proposition</td>
	</tr>
	<tr>
		<td><code>lem:</code></td>
		<td>Lemma</td>
	</tr>
	<tr>
		<td><code>cor:</code></td>
		<td>Corollary</td>
	</tr>
	<tr>
		<td><code>fig:</code></td>
		<td>Figure or Image</td>
	</tr>
	<tr>
		<td><code>eqn:</code></td>
		<td>Equation</td>
	</tr>
</table>