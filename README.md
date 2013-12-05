LaTeX Tutorials
=============

A simple, interactive tutorial site.

This repository holds the source files for LaTeXTutorials.co.uk, and is built with Jekyll. Currently, the site is hosted on Github. 

If you wish to contribute, create a fork of this repo, edit your local copy and submit a pull request. 

### Setup

Once you have forked and cloned your own copy of this repo, you are free to edit any of the practice equations, and documentation pages as you see fit.

In order to preview your changes, you will need Jekyll installed on your system. For more information, visit [jekyllrb.com](http://jekyllrb.com/).

If you run some UNIX OS, then you are one simply a few commands away

  gem install jekyll kramdown   # Kramdown for Markdown parsing
  easy_install Pygments         # Pygments for syntax highlighting (requires Python)

Enter the site directory, and then build the site with

  jekyll build 

Provided everything has been installed correctly, you should not get any errors. If you do get a whole bunch of crazy errors, read the section below.

To view the site, and to continually build automatically, run

  jekyll serve --watch

Then navigate to `localhost:4000` in a browser.

If you run Windows, Jekyll is not officially supported, but it is still possible to install (I think). You'll need at least Ruby and Ruby Gems.

### Create a new equation

A small bash script resides in the `practice/` directory to create a new equation file to provide consistency. Provided you run some UNIX system, you'll be fine. If you run Windows, ~~may God help you~~ create the files manually, but ensure all files are consistent.
	
The script `neweqn` takes two command line parameters:

- `difficulty`: specify one of `{b|i|a}`, which stands for beginner, intermediate, or advanced
- `equation title`: give your equation a name. If you use spaces, surround the title with quotes

For example

	cd practice/
	./neweqn b "The Quadratic Equation"
	
will create a new file named `the-quadratic-equation.md` in the `practice/beginner/` directory, and open up vim, ready for editing. Navigate to line 8, and type the new equation in LaTeX between the double dollar symbols.

If you want to give extra tips, particularly if a more semantic symbol exists, then create a list in the YAML front matter, at the top of the file.

	---
	layout: practice
	title: "The Quadratic Equation"
	base: practice
	difficulty: beginner
	author: # optional
	tips:
	  - Use \frac{}{} to create a fraction.
	  - Use \sqrt{} (with curly braces) to place muliple items under the square-root symbol.
	---
	
	$$ x = \frac{-b \pm sqrt{b^2 - 4ac}}{2a} $$
	
Feel free to add as many as you like, or correct existing ones.

### Nope, still can't install Jekyll

Things might have gone a bit weird if you run Mac OS X 10.9 (Mavericks). We can get around this by installing the latest version of Ruby via RVM. (As of writing, the latest version is Ruby 2.1.0). Run the following in a terminal (you'll need Git installed, but Mac has this installed already, yay!)

  $ \curl -L https://get.rvm.io | bash -s stable --rails --autolibs=enabled

Once it has been installed, we will want this new version to be loaded, in place of the pre-installed version. To do this, we edit the `bash_profile` with everyone's favourite editor:

  sudo vim ~/.bash_profile

Add the following line

  [[ -s "$HOME/.rvm/scripts/rvm" ]] && source "$HOME/.rvm/scripts/rvm"

If you run a different shell, instead of Bash, such as ZSH, then edit your relevant profile file instead. i.e. for ZSH

  sudo vim ~/.zsh_profile

Next, we restart RVM, or just reload the terminal session.

  rvm                        # Restart RVM
  rvm list known             # Lists all available versions. Look for the latest version number
  rvm install 2.1.0          # Install version 2.1.0 (change this number if a newer version exists)
  rvm --default use 2.1.0    # Change the default Ruby version
  ruby -v                    # Check we are using the correct version

Once all that is done, run the commands in the Setup section above again. Hopefully everything installs successfully this time round.

