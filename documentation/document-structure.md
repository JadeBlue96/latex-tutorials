---
layout: default
sidebar: documentation
title: "Document Structure"
base: documentation
---

The first command you will need to know is

{% highlight latex %}
\documentclass[options]{class}
{% endhighlight %}

<dl>
	<dt>options</dt>
		<dd>Provide attributes to determine the appearance and layout of your document. Separate multiple options with a comma.</dd>
		<dd>
			<table>
				<tr>
					<td>Font size</td>
					<td><code>10pt, 11pt, 12pt</code></td>
					<td>Main body text font size</td>
				</tr>
				<tr>
					<td>Page Orientation</td>
					<td><code>landscape, portrait</code></td>
					<td>Set the main orientation of the document</td>
				</tr>
				<tr>
					<td>Document style</td>
					<td><code>oneside, twoside</code></td>
					<td>Set up the document as a booklet</td>
				</tr>
				<tr>
					<td>Columns</td>
					<td><code>onecolumn, twocolumn</code></td>
					<td>Set the number of columns you want per page</td>
				</tr>
			</table>
		</dd>
	<dt>class</dt>
		<dd>State the purpose of your document. For most documents, <code>article</code> will suffice. Choose one document type from the list.</dd>
		<dd>
			<table>
				<tr>
					<td>Document type</td>
					<td><code>article, report, book, letter, slides</code></td>
				</tr>
			</table>
		</dd>
</dl>

#### Examples

An article, nothing flash 

{% highlight latex %}
\documentclass[]{article}
{% endhighlight %}

An article, with font size 11 and 2 columns like a newspaper 

{% highlight latex %}
\documentclass[11pt, twocolumn]{class}
{% endhighlight %}

##### Header
After the document declaration, is the header, a place to give LaTeX instructions on how to format your document and define new commands. We will discuss more on this subject in later pages.

##### Details
Next we enter information about the document. That is, the title and the name of the author.

{% highlight latex %}
\title{A Really Important Proof}
\author{N. Ame}
\date{today}
{% endhighlight %}

##### Begin Document
Now we can formally define the start of the document. Use the following command:

{% highlight latex %}
\begin{document}
  \maketitle % Render the title and author text
  % All the content goes between these tags
\end{document}
{% endhighlight %}

##### Comments
In the code snippet above, you will notice percent symbols `%` preceding some text. This is the LaTeX syntax for comments. Such text is not rendered by LaTeX. 

Try to get in the habit of leaving comments throughout your code. They will come in use for quickly navigating long documents, or when you return after a hiatus.

##### Additional Structures
For more information on how to code your document, visit the [Text Environment]({{ site.baseurl }}/documentation/text-environment) page
