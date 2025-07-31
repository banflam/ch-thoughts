import quotes from "./quotes.js";

function addAuthorElement(author) {
  const finalListElement = document
    .createElement("li")
    .appendChild(document.createElement("p"));

  const author_text_node = document.createTextNode(author);
  finalListElement.appendChild(author_text_node);

  document
    .getElementById("all-authors-insertion")
    .appendChild(finalListElement);
}

const uniqueAuthors = [...new Set(quotes.map((quote) => quote.author))];

uniqueAuthors.forEach((author) => addAuthorElement(author));
