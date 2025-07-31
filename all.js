import quotes from "./quotes.js";

function addQuoteElement(text, author) {
  const finalListElement = document
    .createElement("li")
    .appendChild(document.createElement("blockquote"));

  const quoteElement = document.createElement("q");
  const citeElement = document.createElement("cite");

  const quote_text = document.createTextNode(text);
  const cite_text = document.createTextNode(author);

  quoteElement.appendChild(quote_text);
  citeElement.appendChild(cite_text);

  finalListElement.appendChild(quoteElement);
  finalListElement.appendChild(citeElement);

  document.getElementById("all-quotes-insertion").appendChild(finalListElement);
}

quotes.forEach((quote) => addQuoteElement(quote.text, quote.author));
