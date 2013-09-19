---
layout: default
sidebar: documentation
title: "Tables & Arrays"
base: documentation
---

#### Tabulars

The tabular environment is used to create tables within the text environment. The basic structure of a table is as follows

{% highlight latex %}
\begin{tabular}{columns}
  data
\end{tabular}
{% endhighlight %}

There are two things you need to do to customise a table: specify the column alignments and fill in the cells.

<table>
	<tr>
		<td>columns</td>
		<td><code>c, l, r</code></td>
		<td>Columns which are centred, left, and right aligned</td>
	</tr>
	<tr>
		<td>data</td>
		<td><code>& \\</code></td>
		<td>Use an ampersand to separate cells and double backslash to begin a new row</td>
	</tr>
</table>

You define each column individually in this environment, so if you want three columns, two centred and one right aligned, the LaTeX code will be:

{% highlight latex %}
\begin{tabular}{c c r}
  cell 1 & cell 2 & cell 3 \\
  cell 4 & cell 5 & cell 6
\end{tabular}
{% endhighlight %}

If you need a new row, just add a double backslash and add as many as you require. Notice also that the final row does not need a double backslash.

#### Borders

To add a vertical border between two columns, put a `|` between where you defined the columns. To add a vertical line above a row, put `hline` just before the row starts. Here is an example of the same table as above with borders only around the outside.

{% highlight latex %}
\begin{tabular}{| c c r |}      \hline
  cell 1 & cell 2 & cell 3 \\
  cell 4 & cell 5 & cell 6 \\    \hline
\end{tabular}
{% endhighlight %}

In this situation the final row needs a double backslash since the hline is such that it puts a board above the *next* row, so to board a row from underneath we must define a new row and board that one from above. A little crazy I know. Here is an example of a table where all cells have borders:

{% highlight latex %}
\begin{tabular}{| c | c | r |}   \hline
  cell 1 & cell 2 & cell 3 \\    \hline
  cell 4 & cell 5 & cell 6 \\    \hline
\end{tabular}
{% endhighlight %}

If you want double lines then just use `\hline\hline` or `||`. Its that simple!

#### Column Width

These tables will set the column width to the minimum possible. A lot of the time, you will want the columns to be all of the same width or be able to change them as you see fit. To do this you can replace `c`, `l` or `r` with `p{factor\linewidth}`. Where you can set `factor` to any number. `1` will make the width of the cell the entire line width and `.5` half the entire line width (you get the idea). Here is an example of the same table as above but where we have specified the column widths.

{% highlight latex %}
\begin{tabular}{| p{.2\linewidth} | p{.2\linewidth} | p{.2\linewidth} |}  \hline
  cell 1 & cell 2 & cell 3 \\   \hline
  cell 4 & cell 5 & cell 6 \\   \hline
\end{tabular}
{% endhighlight %}

Using `p{factor\linewidth}` to define columns is useful as LaTeX does not limit the size of a column when using `l`, `c` or `r`. If you fill a cell with a lot of text, it will stretch the cell out and bleed off the page. Using `p{factor\linewidth}` means you force the text into a new line as soon as and when required.

#### Arrays

The array environment is very similar to the tabular environment except that it is used in a Math environment. You will use the array environment to create matrices and the like. Here is the 3 by 3 identity matrix as an example.

{% highlight latex %}
\begin{array}{c c c}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & 1
\end{array}
{% endhighlight %}

You will probably want to put brackets around the array to make it look like a matrix. To do this use the commands `\left(` and `\right)` around the array environment

{% highlight latex %}
\left(
  \begin{array}{c c c}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
  \end{array}
\right)
{% endhighlight %}

The `\left(` and `\right)` command are extremely useful. They are used to stretch ordinary brackets to fit around what ever is inside them. Use them when dealing with fractions and other large (or rather tall) equations. You can use the `\left` and `\right` commands on other types of brackets; such as `\left{ right}` or `\left[ right]`.

Alternatively, you can experiment with the `matrix` or `pmatrix` packages which provide extra features, saving you work. For more information, read the [Matrices and Arrays](http://en.wikibooks.org/wiki/LaTeX/Mathematics#Matrices_and_arrays) section in the LaTeX Wikibook.
