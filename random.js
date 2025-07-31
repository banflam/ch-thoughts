import quotes from "./quotes.js";
const quote_text_main = document.getElementById("quote_text_main");
const author_text_main = document.getElementById("author_text_main");

const quote_text_footer = document.getElementById("quote_text_footer");
const author_text_footer = document.getElementById("author_text_footer");

const random_link = document.querySelector(".random");

const set_random_quotes = function () {
  var main_quote_idx = Math.floor(Math.random() * quotes.length);
  var footer_quote_idx = Math.floor(Math.random() * quotes.length);

  while (main_quote_idx === footer_quote_idx) {
    footer_quote_idx = Math.floor(Math.random() * quotes.length);
  }

  var quote_main = quotes[main_quote_idx];
  var quote_footer = quotes[footer_quote_idx];

  quote_text_main.textContent = quote_main.text;
  author_text_main.textContent = quote_main.author;

  quote_text_footer.textContent = quote_footer.text;
  author_text_footer.textContent = quote_footer.author;
};

random_link.addEventListener("click", function (e) {
  e.preventDefault();
  set_random_quotes();
});
