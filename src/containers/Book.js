// libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

// src
import EditBookForm from "./EditBookForm";

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false
    };
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  toggleEditForm() {
    this.setState({
      showEdit: !this.state.showEdit
    });
  }

  render() {
    const { title, author, year, id, subject } = this.props;

    return (
      <div>
        {title} {author} {year}
        <button onClick={this.toggleEditForm}>Edit</button>
        <section style={{ display: this.state.showEdit ? "block" : "none" }}>
          <EditBookForm
            title={title}
            author={author}
            year={year}
            subject={subject}
            id={id}
            toggleEditForm={this.toggleEditForm.bind(this)}
          />
        </section>
      </div>
    );
  }
}

Book.propTypes = propTypes;

export default Book;
