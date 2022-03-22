import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
import { books } from "./books";

// components
import Book from "./Book";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// children is used for children props,and can be accessed only as children in props

ReactDom.render(<BookList />, document.getElementById("root"));

// inside jsx to access js, we use curly braces
// to set css, we can pass  a json object which is a part of javascript world, so we use two curly braces, this sets up inline css

// inline css is more powerful than external css file

// any javascript inside the jsx, must return a value, and can't be just a statement(let x=5)
