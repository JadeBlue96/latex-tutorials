---
layout: default
sidebar: documentation
title: "Text Environment"
base: documentation
---

Entering text is not too different to typing in a word processor. However, any formatting is done via functions or commands, rather than clicking a button. The structure of your code is also very important. Make sure you indent and space out your code to make it easier to read and edit.

#### Sections

To create sections in your document, use the following LaTeX functions, where `name` is the name of the current section.

{% highlight latex %}
\section{name}
  ...
  \subsection{name}
    ...
    \subsubsection{name}
{% endhighlight %}

You can add an asterisk `*` to remove the section number, such as

{% highlight latex %}
\section*{name}
{% endhighlight %}

#### Text

For normal body text, you may enter i.e. just like you would in a normal word processor. However, as hinted above, there are some key differences, listed below.

##### Whitespace

Generally, LaTeX ignores superfluous whitespace. So <code>word&nbsp;&nbsp;&nbsp;&nbsp;word</code> will render the same as `word word`. This also applies to carriage returns.

Note that entering carriage returns in some math environments will result in strange messages. These will be explained in the Errors section.

##### Formatting

As with word processors, you can apply formatting to emphasise certain words or phrases. A basic, but not extensive, list is given below:

<dl>
	<dt>Bold</dt>
		<dd><code>\textbf{bold text}</code></dd>
	<dt>Emphasise</dt>
		<dd><code>\emph{text to emphasis}</code></dd>
	<dt>Quotation Marks</dt>
		<dd>Single <code>`quote'</code> marks</dd>
		<dd>Double <code>``quote''</code> marks</dd>
	<dt>Font Size</dt>
		<dd><code>\tiny</code>, <code>\small</code>, <code>\normalsize</code>, <code>\large</code>, <code>\huge</code></dd>
	<dt>Dashes and Hyphens</dt>
		<dd>Hyphen: <code>-</code></dd>
		<dd>En-dash: <code>--</code></dd>
		<dd>Em-dash: <code>---</code></dd>
	<dt>Ellipsis</dt>
		<dd><code>\ldots</code></dd>
	<dt>Verbatim Text</dt>
		<dd>Use <code>\begin{verbatim} ... \end{verbatim}</code> for plain text</dd>
		<dd>Use <code>\begin{alltt} ... \end{alltt}</code> to allow for LaTeX commands. Note, you will need the <code>alltt</code> package for this to compile</dd>
		<dd>Use <code>\verb+...+</code> for inline verbatim text</dd>
		<dd>Use <code>\texttt{...}</code> for inline verbatim text in a math environment</dd>
</dl>