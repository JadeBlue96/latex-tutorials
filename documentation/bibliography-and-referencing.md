---
layout: default
sidebar: documentation
title: "Bibliography & Referencing"
base: documentation
---

Many people loathe creating a bibliography, but this need not be the case. When researching topics for your document, keep a list of all the books you have used and bookmark specific pages. If you keep organised, your bibliography will create itself!

In the following examples, we will be using `BibDesk` alongside `TeXShop`. Your system may be different, but the steps should be similar. If you want to create your bibliography manually, jump to the <a href="#manual">next section</a>.

Within `BibDesk`, create a new bibliography database file. Save it in the same directory as your `.tex` file. You are now ready to add books and document details. Refer to the Resources page to find out more 

{% highlight latex %}
\bibliographystyle{style}
\bibliography{location}
{% endhighlight %}

<dl>
	<dt>style</dt>
		<dd>Specify your bibliography style. See the table below for more information</dd>
	<dt>location</dt>
		<dd>default</dd>
		<dd>As an example, if your database file, called <code>maths</code>, was located in a subdirectory, <code>BibTex_databases</code>, of your current working directory, then you would use the following path <code>../BibTeX_databases/maths</code></dd>
</dl>

#### Referencing Styles

In the above example, we declared that our bibliography will be using the `plain` style. There are many other citation styles, some of which are describe below.

<table>
	<tr>
		<th>Style</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code>plain</code></td>
		<td>Order last names of authors in alphabetical order. Names will be displayed in full</td>
	</tr>
	<tr>
		<td><code>abbrv</code></td>
		<td>Order last names of authors in alphabetical order. Names will be initialised</td>
	</tr>
	<tr>
		<td><code>alpha</code></td>
		<td>Takes the first three letters of the author, or initials if there are multiple authors, along with the publish date</td>
	</tr>
	<tr>
		<td><code>ieeetr</code></td>
		<td>Order the bibliography items in order of appearance, rather than alphabetically</td>
	</tr>
</table>

#### Referencing

Inserting a reference to a book or document is now very easy

{% highlight latex %}
\cite[location]{key}
{% endhighlight %}

<dl>
	<dt>location</dt>
		<dd>This is optional. It is used to reference a specific part of a book or document. See the table below for examples</dd>
	<dt>key</dt>
		<dd>Here you enter the unique citation key you used for a book or document</dd>
</dl>

<table>
	<tr>
		<th>Examples</th>
		<th>Description</th>
	</tr>
	<tr>
		<td><code>\cite{Aut60}</code></td>
		<td>Reference a book</td>
	</tr>
	<tr>
		<td><code>\cite[p.~130]{Aut60}</code></td>
		<td>Reference a specific page in a book</td>
	</tr>
	<tr>
		<td><code>\cite[pp.2-5]{Aut60}</code></td>
		<td>Reference a range of pages of a book</td>
	</tr>
	<tr>
		<td><code>\cite[textsection 3]{Aut60}</code></td>
		<td>Reference an entire text section of the book</td>
	</tr>
</table>

#### Compiling

When compiling your document, you may notice that the bibliography and references do not show up correctly. This is just how the LaTeX compiler works. To solve this, try the following steps:

1. Compile with LaTeX &mdash; This renders your most of the document but you may see errors
2. Compile with BibTex &mdash; This defines all the references
3. Compile with LaTeX &mdash; Re-renders document, again with errors shown
4. Compile with LaTeX &mdash; Render document for the last time

<h4 id="manual">Manual Bibliography</h4>

To insert bibliography references manually, without the use of a database program, adapt the following code. Do ensure you have all the required information about each resource you have used, are included.

{% highlight latex %}
\bibliographystyle{plain}
\begin{thebibliography}{count}
  \bibitem{key}
    author,
    \emph{title}.
    publisher, country,
    edition,
    date.
\end{thebibliography}
{% endhighlight %}

<dl>
	<dt>count</dt>
		<dd>Integer. If you only require a one-digit reference, enter <code>9</code>. Else, enter <code>99</code></dd>
	<dt>key</dt>
		<dd>A unique citation key</dd>
	<dt>author</dt>
		<dd>Full name of author(s)</dd>
	<dt>title</dt>
		<dd>Full title of the resource</dd>
	<dt>publisher</dt>
		<dd>Full name of publisher</dd>
	<dt>country</dt>
		<dd>Country of publication</dd>
	<dt>edition</dt>
		<dd>Publication edition. Note you can enter any other information</dd>
	<dt>date</dt>
		<dd>Date of publication</dd>
</dl>

You may have to compile the document twice in order for all citations and references to display properly.

#### Quick Tips

If you have a large bibliography, you may want to separate it from the rest of your document. Enter `\newpage` before `\bibliographystyle{}` to start the bibliography on a new page.

If you want to reference a book, but not insert a citation in the main part of the document, you can use the following `\nocite{Aut60}` and place it after your bibliography declaration. When you next compile your document, the book details will then be included in your bibliography.