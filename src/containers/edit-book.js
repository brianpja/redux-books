import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import {  } from '../actions/index';

class EditBook extends Component {

  getBook() {
      for (const book of this.props.books) {
          if (book.id == this.props.match.params.id) return book;
      }
  }

  render() {
    const book = this.getBook();

    return (
      <div>
        <div>Edit the details of {book.title}</div>
        <Link className="link" to='/'>Back to Home</Link>
    </div>
    );
  }
}

function mapStateToProps(state) {
  //what is returned will be props inside BookList
  return state;
}

//this function returns into props of bookList container
function mapDispatchToProps(dispatch) {
  //when selectBook is called, result is passed to all reducers
  //which is done with dispatch.
  //value in object that is passed in references the
  //action creator 'selectBook'. makes it available in BookList as
  //prop 'this.props.selectBook'
  return bindActionCreators({ }, dispatch)
}

//connect function glues this function to the component to create
//a container <BookList />
export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
