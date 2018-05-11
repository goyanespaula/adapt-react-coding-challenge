// libraries
import React, { Component } from "react";
import PropTypes from "prop-types";

// src
import SubjectBookList from "./SubjectBookList";

const propTypes = {
  subject: PropTypes.string.isRequired,
  completeBookList: PropTypes.array.isRequired
};

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.handleExpand = this.handleExpand.bind(this);
  }

  handleExpand() {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const subjectBookList = this.props.completeBookList.filter(b => {
      return b.subject === this.props.subject;
    });
    const display = this.state.isExpanded ? "block" : "none";
    const buttonText = this.state.isExpanded
      ? "Click to Close"
      : "Click to Expand";
    return (
      <section>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2>{this.props.subject}</h2>
          <button onClick={this.handleExpand}>{buttonText}</button>
        </div>
        <div style={{ display: display }}>
          <SubjectBookList books={subjectBookList} />
        </div>
      </section>
    );
  }
}

Subject.propTypes = propTypes;

export default Subject;
