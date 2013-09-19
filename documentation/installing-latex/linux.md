---
layout: default
sidebar: documentation
title: "Installing LaTeX on Linux"
base: documentation
categories: documentation installing-latex
---

Many Linux distributions come ready packaged with LaTeX. Try to find any mention of `texlive`. If one cannot find the aforementioned, open a Terminal (or Konsole) and type

	apt-get install texlive

You may need administrative privileges to run the above.

Next open up a text-editor. Anyone will do, for example Emacs or Vim. Write your LaTeX document and save the file with a `.tex` file extension.

Return to Terminal. If your LaTeX file is called `test.tex`, say, we can produce a PDF file by running the following command

	pdflatex test.tex

A new file, `test.pdf`, should now be available in your current working directory, provided there are no compiler errors. If you get error messages, read them carefully and fix them in your source file.

Alternatively, a common interactive LaTeX editor for the KDE environment is [Kile](http://kile.sourceforge.net/).