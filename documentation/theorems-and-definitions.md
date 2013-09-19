---
layout: default
sidebar: documentation
title: "Theorem & Definitions"
base: documentation
---

If you have seen or have access to lecture notes for some mathematics module, you will have noticed how they set out sections for definitions, theorems, propositions etc.

To enable the use of the `\newtheorem` function, you will have to include the `amsthm` package.

{% highlight latex %}
\usepackage{amsthm}
{% endhighlight %}

Next, you will have to initialise the environments. Place the following code into the header of the document.

{% highlight latex %}
% Theorem Styles
\newtheorem{theorem}{Theorem}[section]
\newtheorem{lemma}[theorem]{Lemma}
\newtheorem{proposition}[theorem]{Proposition}
\newtheorem{corollary}[theorem]{Corollary}
% Definition Styles
\theoremstyle{definition}
\newtheorem{definition}{Definition}[section]
\newtheorem{example}{Example}[section]
\theoremstyle{remark}
\newtheorem{remark}{Remark}
{% endhighlight %}

Each of the functions above are a variation of the basic schema:

{% highlight latex %}
\newtheorem{name}[counter]{Displayed Name}[orderby]
{% endhighlight %}

<dl>
	<dt>name</dt>
		<dd>The environment slug, used when declaring a new environment.</dd>
	<dt>counter</dt>
		<dd>State the dependancy of the environment numbering. Normally, theorems, lemmas, propositions and corollaries are linked to follow the same numbering system.</dd>
	<dt>Displayed Name</dt>
		<dd>The text that is displayed when the document is rendered.</dd>
	<dt>orderby</dt>
		<dd>Determines how the environments will be numbered. The value must be a section level i.e. one of `\section`, `\subsection`, etc.</dd>
</dl>
The `amsthm` package have a few styles built in for use, such as `\theoremstyle{definition}`. For more information on styles, visit the [LaTeX WikiBooks](http://en.wikibooks.org/wiki/LaTeX/Theorems#Theorem_styles).

To use these, take the name of the required environment and place it in `\begin{} ... \end{}` tags. Such as

{% highlight latex %}
\begin{theorem}
  Theorem statement goes here
\end{theorem}
{% endhighlight %}

After the statement of each theorem, you will probably want to include a proof. You can do this with:

{% highlight latex %}
\begin{proof}
  Proof goes here
\end{proof}
{% endhighlight %}

#### Useful tips

To remove the number after the title, simply add an asterisk.

{% highlight latex %}
\begin{theorem*}
  Theorem statement goes here
\end{theorem*}
{% endhighlight %}

To remove numbers altogether, you can do this:

{% highlight latex %}
\newtheorem*{theorem}{Theorem}
{% endhighlight %}

To give a theorem, or any other statement, a proper title, use the following:

{% highlight latex %}
\begin{theorem}[Mean Value Theorem]
  Theorem statement goes here
\end{theorem}
{% endhighlight %}

If you prefer, you can remove the period, or full-stop, from the end of the titles. Do to so, add the following commands before the first `\newtheorem` instance.

{% highlight latex %}
\newtheoremstyle{dotless}{}{}{itshape}{}{bfseries}{}{ }{}
\theoremstyle{dotless}
{% endhighlight %}
