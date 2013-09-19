---
layout: default
sidebar: documentation
title: Macros
base: documentation
category: documentation
---

If you have dabbled in C or C++, you may have come across macros before. In the context of LaTeX, they allow you to define your own commands or functions. In it's simplest use case, you can define a short command which, when your document is compiled, the full word will then be inserted in its place. Macros allow you to save time.

The basic schema is as follows:

{% highlight latex %}
\newcommand{command}[count]{output}
{% endhighlight %}

<dl>
	<dt>command</dt>
		<dd>Define a new command name. This is normally prefixed with a backslash <code>\</code></dd>
	<dt>count</dt>
		<dd>Optional. Specify the amount of parameters this new command takes</dd>
	<dt>output</dt>
		<dd>The resulting LaTeX (commands, text, etc) to be inserted.</dd>
</dl>

When choosing a name for the command, be careful not to overwrite any existing LaTeX commands.

#### Examples

Copy and paste any of the lines below into the header section of your LaTeX document.

{% highlight latex %}
\newcommand{\lorem}{Lorem ipsum}                  % Placeholder text
\newcommand{\vect}[1]{\bold{#1}}                  % Bold vector
\newcommand{\abs}[1]{\lvert#1\rvert}              % Absolute value
\newcommand{\norm}[1]{\lVert#1\rVert}             % Vector norm
\newcommand{\dotp}[2]{\langle#1,#2\rangle}        % Dot product
{% endhighlight %}

Now use their unique command names anywhere in your document. For example, 

{% highlight latex %}
"\lorem" is a commonly used placeholder text.
{% endhighlight %}

will compile to 

{% highlight latex %}
"Lorem ipsum" is a commonly used placeholder text.
{% endhighlight %}

For the commands that accept parameters, use them as follows

{% highlight latex %}
\dotp{x}{y}
{% endhighlight %}