import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectBook, deleteBook, openModal } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    if (!this.props.books) {
      return <div>Loading...</div>
    }

    return this.props.books.map((book) => {
        const link = `/edit/${book.id}`
      return (
         <div className="list-group-item book-container"
            key={book.id}>
            <div
              onClick={() => { this.props.selectBook(book); } }>
              {book.title}
            </div>
            <div>
                <Link
                    className="link"
                    to={link}>
                    Edit
                </Link>
                <button
                    onClick={() => { this.props.openModal(book); } }>
                    delete
                </button>
            </div>
        </div>
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
  return bindActionCreators({ selectBook: selectBook, deleteBook: deleteBook, openModal }, dispatch)
}

//connect function glues this function to the component to create
//a container <BookList />
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
