import quotes from "./quotes.js";

document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  const newListElement = document.createElement("li");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

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
