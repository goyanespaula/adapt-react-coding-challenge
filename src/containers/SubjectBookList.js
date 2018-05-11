// libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

// src
import Book from "./Book";

const propTypes = {
  books: PropTypes.array.isRequired
};

class SubjectBookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const books = this.props.books.map(b => (
      <Book
        title={b.title}
        author={b.author}
        year={b.year}
        subject={b.subject}
        key={b.id}
        id={b.id}
      />
    ));
    return <section>{books}</section>;
  }
}

SubjectBookList.propTypes = propTypes;

export default SubjectBookList;
