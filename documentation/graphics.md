---
layout: default
sidebar: documentation
title: Graphics
base: documentation
---

Including graphics into your LaTeX is a relatively straightforward process. However, there are myriad stories from those on troublesome operating systems *(ahem, Windows)* which will just not compile documents with images.

You will need the `graphicx` package.

{% highlight latex %}
\usepackage{graphicx}
{% endhighlight %}

#### Changing the image location

The base directory path for images is the same in which the `.tex` file is located. If you want to be organised and place images in a subdirectory, you will need to notify LaTeX of this new location. For example, if images are placed in a folder called `images`, place the following command after after the package declaration.

{% highlight latex %}
\graphicspath{./images/}
{% endhighlight %}

#### Image File Formats

To create images, such as graphs or schematic diagrams, there are several methods. For graphs to which you have an explicit formula, you can use `MATLAB` or `Mathematica`. To plot experimental data, try `GNUPlot`. For more free-form graphics, you can use `Adobe Illustrator`. If you are really adventurous and want to draw images in LaTeX, then checkout the `tikz` package.

If you are generating images yourself, try to create them in vector formats. LaTeX can import a large variety of files and compile them together automatically to create the document.

Suitable file types for images include `.png`, `.pdf`, `.eps`.

#### Including graphics

Here is the basic code for inserting a single image into the document. Most of the commands are self-explanatory.

{% highlight latex %}
\begin{figure}[htb]
  \centering
  \includegraphics{image.png}
  \caption{The caption for this image}
  \label{fig:image}
\end{figure}
{% endhighlight %}

The `\centering` command is to position the image in the middle of the page. This improves the vertical rhythm of the document. The size of the images will be their actual size, or if they are wider than the document width, it will be scaled down.

#### Multiple Images

To insert multiple images side by side, use the `\subfloat` command. You will need to include the `subfig` package.

{% highlight latex %}
\usepackage{subfig}				% Place in header section
{% endhighlight %}

{% highlight latex %}
\begin{figure}[htb]
  \centering
  \subfloat[First image caption]{\label{fig:firstimage}\includegraphics{firstimage.png}} \qquad
  \subfloat[Second image caption]{\label{fig:secondimage}\includegraphics{secondimage.png}}
  \caption{Caption for the group of images}
  \label{fig:groupimage}
\end{figure}
{% endhighlight %}

The `\qquad` command is a space, used just to create a gap between the images. The images will be automatically resized.

#### Image Referencing

You may have noticed `\label{fig:image}` in the examples above. These are labels for the images so they can be referenced in another location within the document. To do so, use the following:

{% highlight latex %}
\ref{fig:image}
{% endhighlight %}

where the text in `\ref{}` matches the text in `\label{}`.

For more information about labels, refer to the [Labels]({{ site.baseurl }}/documentation/labels) page.

Remember, if you have taken an image from a book or the internet, be sure to give appropriate credit to the author or rights holder. 
