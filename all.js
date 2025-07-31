import quotes from "./quotes.js";

document.body.onload = addElement;

function addElement() {
  const finalListElement = document
    .createElement("li")
    .appendChild(document.createElement("blockquote"));

  const quoteElement = document.createElement("q");
  const citeElement = document.createElement("cite");

  const quote_text = document.createTextNode(
    "This is a test quote to see if it is added correctly."
  );

  const cite_text = document.createTextNode("Test cited author");

  quoteElement.appendChild(quote_text);
  citeElement.appendChild(cite_text);

  const newNestedBlockQuote = finalListElement.appendChild(quoteElement);
  newNestedBlockQuote.appendChild(citeElement);

  const targetList = document.getElementById("all-quotes-insertion");
  targetList.appendChild(finalListElement);
}

/*
<li>
  <blockquote cite="/t/4">
    <q>
      Let sounds be themselves rather than vehicles for man-made theories or
      expression of human sentiments.
    </q>
    <cite>
      <a href="/t/4">John Cage</a>
    </cite>
  </blockquote>
</li>;
*/
