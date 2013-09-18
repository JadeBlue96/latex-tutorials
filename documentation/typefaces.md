---
layout: default
sidebar: documentation
title: Typefaces
base: documentation
category: documentation
---

This is an advanced tutorial on how to use different typefaces in your document.

Generally, it is advised that you do not change the default typeface `Computer Modern Roman`. However, if one must, here's a rough guide on how to do so.

Note: for this guide, we will be using the `Lateinische Ausgangsschrift`, or `la` for short, as an example.

Firstly, download the required typeface, if necessary. The [LaTeX Font Catalogue](http://www.tug.dk/FontCatalogue/) is a good place to look. Once you have chosen one, such as [la](http://www.tug.dk/FontCatalogue/la/), scroll down to the bottom of the page and click through to the [CTAN fonts archive](http://www.ctan.org/tex-archive/fonts/la/). In our case, this is `http://www.ctan.org/tex-archive/fonts/la/`.

Download all the files present on that page, and place them in the same directory as your `.tex` file.

Back in your LaTeX document, add the following in the header

	\usepackage[T1]{fontenc}
	\usepackage{font}

where `font` is replaced by the shortname for your chosen font. In our case, this is `la`.

To use this new font in the text environment, precede text with `\lanormal`. For example
	
	{\lanormal This text will now use Lateinische Ausgangsschrift}

To return back to Computer Modern Roman, the default font, use

	\normalfont

Note that the command `\lanormal` is specific to our example font. You will have to find out which commands have been allocated to your own chosen font. To find out, open up the file `font.sty`, where `font` is replaced with the shortname of your chosen font. In here, you will see a bunch of `\newcommand{}{}` statements. These new commands define the new fonts you can use. Most should be just different sizes and variations.

In our case, we have

	\lanormalsize
	\lalarge
	\laLarge
	\laLARGE
	\lahuge
	\laHuge
	\llanormalsize
	\llalarge
	\llaLarge
	\llaLARGE
	\llahuge
	\llaHuge
