---
layout: default
sidebar: documentation
title: "Installing LaTeX on Windows"
base: documentation
categories: documentation installing-latex
---

On Windows, you need three components to edit, create and view a LaTeX document. These are a PDF viewer (such as [Adobe Reader](http://get.adobe.com/reader/)), a LaTeX Distribution such as MiKTeX (which is the collection of tools required to prepare LaTeX documents) and a LaTeX editor, such as [TeXworks](http://www.tug.org/texworks/) (included by default in MiKTeX) or [TeXnicCenter](http://www.texniccenter.org/). You edit your `.tex` file using the LaTeX Editor, before the Editor uses the Distribution to compile your file into a `.pdf` format.

While is may sound a lot, you can do this all at once by installing [MiKTeX](http://www.miktex.org/), since it comes bundled with the distribution, the editor TeXworks and a basic document viewer. Adobe Reader might still be useful here, although the installation process won't be carried out in this guide.

1. Head to [MiKTeX](http://www.miktex.org/)

2. On the left pane, head to Downloads and select the latest version of MiKTeX, in this case 2.9.

3. Scroll down to the section "Installing a basic MiKTeX system" and download the 32-bit "Basic MiKTeX 2.9" Installer. There is a 64-bit experimental version if you'd like, but use at your own risk! The file size in either case should be around 150MB.

4. Once downloaded, accept the MiKTeX copying conditions, decide for which users you want to install MiKTex for and the directory of the installation. When asked whether to "install missing packages on the fly", select "yes" as that will mean that as you use a package for the first time, MiKTeX will automatically go online to search for the package files in order to install it, without the need for you to do anything. Confirm everything and start the installation. <br/></br/> Once installation has completed, you should find that a program called TeXworks has been installed. This can be found by going to `Programs > MiKTeX 2.9 > TeXworks`. Run it.

5. Once TeXworks has run, change the drop down menu in the top left to `pdfLaTeX+MakeIndex+BiBTeX`. <br/> <br/> And just to get you started, write the following in the big white box:

{% highlight latex %}
\documentclass{article}
\begin{document}
	Hello World!
\end{document}
{% endhighlight %}

To finish off, press the `Play` button in the top left to commence typesetting, choose a location to save your `.tex` file (and all documents created from this file) and then hopefully you should end up with something like this:

If you see something like this then congratulations! You've compiled your first LaTeX document! If you now look in the folder where you saved your `.tex` file, you should see some other files, including a `.pdf` file. You can now open the PDF to view the same file as earlier. Note that with TeXworks, your PDF must not be open while attempting to compile the TEX file, otherwise this will result in an error. If this happens, just close the PDF that's open, click the red and white cross and then click the play button to start compiling again.
