// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src

const propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  toggleEditForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

class EditTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let stateObj = {};
    if (nextProps.title !== prevState.title) {
      stateObj.title = nextProps.title;
    }
    if (nextProps.author !== prevState.author) {
      stateObj.author = nextProps.author;
    }
    if (nextProps.year !== prevState.year) {
      stateObj.year = nextProps.year;
    }
    return stateObj.title || stateObj.author ? stateObj : null;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const editedBook = this.state;
    editedBook.id = this.props.id;
    editedBook.subject = this.props.subject;
    editedBook.year = +editedBook.year;
    this.props.toggleEditForm();
    this.props.dispatch({ type: "EDIT_BOOK", book: editedBook });
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          value={this.state.title}
        />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          onChange={this.handleChange}
          value={this.state.year}
        />
        <input type="submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

EditTodoForm.propTypes = propTypes;

export default connect(mapStateToProps)(EditTodoForm);
