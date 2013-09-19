---
layout: default
sidebar: documentation
title: Packages
base: documentation
---

LaTeX has a lot of functionality built straight in. However, there is always the odd chance you would want extra symbols, or even draw diagrams with code!

Here is a list of commonly used packages along with a description. To use them, simply use the following schema, and replace `packagename` with the actual package name.

{% highlight latex %}
\usepackage{packagename}
{% endhighlight %}

#### Quick Tip

When you start creating more and more complex documents with many packages, you will have a very large header section. To reduce the amount of lines used, you can combine all the package commands into one comma separated list.

{% highlight latex %}
\usepackage{times, geometry, graphicx, amssymb, amsmath, amsthm, subfig}
{% endhighlight %}

<table>
	<tr>
		<th>Package</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code>times</code></td>
		<td>Use the Times typeface</td>
	</tr>
	<tr>
		<td><code>geometry</code></td>
		<td>Provides extra customisation commands to the document, such as margins</td>
	</tr>
	<tr>
		<td><code>graphicx</code></td>
		<td>Used for inserting images</td>
	</tr>
	<tr>
		<td><code>amssyb</code></td>
		<td>Provides many extra symbols</td>
	</tr>
	<tr>
		<td><code>amsmath</code></td>
		<td>Contains advanced math extensions</td>
	</tr>
	<tr>
		<td><code>amsthm</code></td>
		<td>Core theorem styles and commands. Proof environment also included.</td>
	</tr>
	<tr>
		<td><code>subfig</code></td>
		<td>Allows for subfigures or floating images</td>
	</tr>
	<tr>
		<td><code>color</code></td>
		<td>Provides access to colours for formatting text</td>
	</tr>
	<tr>
		<td><code>fancyhdr</code></td>
		<td>Allows for customisation of headers and footers</td>
	</tr>
	<tr>
		<td><code>pdfpages</code></td>
		<td>Insert external PDF files into the document</td>
	</tr>
	<tr>
		<td><code>tikz</code></td>
		<td>Versatile diagram package</td>
	</tr>
</table>