MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      processEscapes: true
    },
    CommonHTML: { linebreaks: { automatic: true } },
    "HTML-CSS": { linebreaks: { automatic: true } },
    SVG: { linebreaks: { automatic: true } }
  });


  document.getElementById('inputquestion').addEventListener('input', function() {
    var mathInputValue = this.value;
    var outputElement = document.getElementById('inputquestiontextarea');
    
    // Clear previous output
    outputElement.innerHTML = '';

    // Create a new span element for rendering
    var newSpan = document.createElement('span');
    newSpan.textContent = mathInputValue;

    // Append the new span to the output element
    outputElement.appendChild(newSpan);

    // Use MathJax to typeset the math content
    MathJax.Hub.Typeset(outputElement);
  });