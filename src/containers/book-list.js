import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => {
            this.props.selectBook(book);
            }
          }
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //what is returned will be props inside BookList
  return {
    books: state.books
  };
}

//this function returns into props of bookList container
function mapDispatchToProps(dispatch) {
  //when selectBook is called, result is passed to all reducers
  //which is done with dispatch.
  //value in object that is passed in references the
  //action creator 'selectBook'. makes it available in BookList as
  //prop 'this.props.selectBook'
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

//connect function glues this function to the component to create
//a container <BookList />
export default connect(mapStateToProps, mapDispatchToProps)(BookList);