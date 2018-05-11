// libraries
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// src
import "./App.css";
import Subject from "./containers/Subject";
// import NewBookForm from "./containers/NewBookForm";

const propTypes = {
  completeBookList: PropTypes.array.isRequired
};

class App extends Component {
  render() {
    const subjectSet = new Set(this.props.completeBookList.map(b => b.subject));
    const subjects = [...subjectSet].map((s, i) => (
      <Subject
        subject={s}
        completeBookList={this.props.completeBookList}
        key={i}
      />
    ));

    return (
      <section className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Book App</h1>
        </header>
        {subjects}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    completeBookList: state.completeBookList
  };
}

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
