(function(ns) {
  // http://css-tricks.com/snippets/javascript/support-tabs-in-textareas/
  HTMLTextAreaElement.prototype.getCaretPosition = function() { //return the caret position of the textarea
    return this.selectionStart;
  };
  HTMLTextAreaElement.prototype.setCaretPosition = function(position) { //change the caret position of the textarea
    this.selectionStart = position;
    this.selectionEnd = position;
    this.focus();
  };

  // Attach event listeners
  function addEvent(obj,type,fn) {
    if(obj.addEventListener) {
      obj.addEventListener(type,fn,false);
    } else if(obj.attachEvent) {
      obj.attachEvent('on' + type, function() { return fn.apply(obj, [window.event]);});
    } else {
      obj['on'+type] = fn;
    }
  }

  ns.init = function( eqns, baseurl ) {
    // Global variables
    // DOM elements
    var btn_compile = document.getElementById('compile'),
        btn_toggle_answer = document.getElementById('toggle-answer'),
        btn_new_equation = document.getElementById('new-equation'),
        latex_source = document.getElementById('latex-source'),
        latex_output = document.getElementById('math'),
        latex_answer = document.getElementById('latex-answer'),
        textarea = document.getElementsByTagName('textarea')[0];

    // Support tab on textarea
    textarea.onkeydown = function(event) {
      if (event.keyCode == 9) { //tab was pressed
        var newCaretPosition;
        newCaretPosition = textarea.getCaretPosition() + "  ".length;
        textarea.value = textarea.value.substring(0, textarea.getCaretPosition()) + "  " + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
        textarea.setCaretPosition(newCaretPosition);
        return false;
      }
      if (event.keyCode == 8) { //backspace
        if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == "  ") { //it's a tab space
          var newCaretPosition;
          newCaretPosition = textarea.getCaretPosition() - 3;
          textarea.value = textarea.value.substring(0, textarea.getCaretPosition() - 3) + textarea.value.substring(textarea.getCaretPosition(), textarea.value.length);
          textarea.setCaretPosition(newCaretPosition);
        }
      }
      if (event.keyCode == 37) { //left arrow
        var newCaretPosition;
        if (textarea.value.substring(textarea.getCaretPosition() - 4, textarea.getCaretPosition()) == "  ") { //it's a tab space
          newCaretPosition = textarea.getCaretPosition() - 3;
          textarea.setCaretPosition(newCaretPosition);
        }
      }
      if (event.keyCode == 39) { //right arrow
        var newCaretPosition;
        if (textarea.value.substring(textarea.getCaretPosition() + 4, textarea.getCaretPosition()) == "  ") { //it's a tab space
          newCaretPosition = textarea.getCaretPosition() + 3;
          textarea.setCaretPosition(newCaretPosition);
        }
      }
    }
      
    // Grab answer from dynamically generated DOM element
    MathJax.Hub.Queue(function() {
      latex_answer.value = document.getElementById('MathJax-Element-1').innerHTML.replace(/(^\s+|\s+$)/g,'');
    });

    // Click events
    addEvent(btn_compile,'click',function(e) {
      // Copy textarea content over to preview div
      latex_output.innerHTML = '\\[ ' + latex_source.value + ' \\]';

      // Queue up new render with MathJax
      MathJax.Hub.Queue(["Typeset",MathJax.Hub,latex_output]);

      e.returnValue = false;
      if(e.preventDefault) e.preventDefault();
      return false;
    });

    addEvent(btn_toggle_answer,'click',function(e) {
      latex_answer.style.display = (latex_answer.style.display == 'inline-block') ? 'none' : 'inline-block'; 
      latex_answer.style.height = (latex_answer.scrollHeight)+'px';

      e.returnValue = false;
      if(e.preventDefault) e.preventDefault();
      return false;
    });

    addEvent(btn_new_equation,'click',function(e) {
      window.location = baseurl + eqns[Math.floor(Math.random() * eqns.length)];

      e.returnValue = false;
      if(e.preventDefault) e.preventDefault();
      return false;
    });
  }

})(this.practice = this.practice || {});
