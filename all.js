import quotes from "./quotes.js";

document.body.onload = addElement;

function addElement() {
  const newNestedBlockquoteElement = document
    .createElement("li")
    .appendChild(document.createElement("blockquote"));

  const newListElementBlockquoteQuotation = document.createElement("q");

  const newListElementBlockquoteText = document.createTextNode(
    "This is a test quote to see if it is added correctly."
  );

  const newListElementBlockQuoteCitation = document.createElement("cite");

  const newListElementBlockQuoteCitationText =
    document.createTextNode("Test cited author");

  // add the newly created element and its content into the DOM
  const targetList = document.getElementById("all-quotes-insertion");
  targetList.appendChild(newNestedBlockquoteElement);
  //document.body.innerHTML = newNestedBlockquoteElement;
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
