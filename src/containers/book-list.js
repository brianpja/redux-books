import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { selectBook, deleteBook, openModal, moveUp, moveDown } from '../actions/index';
import { store } from '../index';

class BookList extends Component {

  renderList() {
    if (!this.props.books) {
      return <div>Loading...</div>
    }

    const filteredBooks = this.props.books.filter((book) => {
        const title = book.title.toLowerCase();
        return (title.includes(this.props.search));
    })

    if (!filteredBooks.length) {
        return <div>No books matched your search</div>
    }

    return filteredBooks.map((book, i) => {

        const link = `/edit/${book.id}`;
      return (
         <div className="list-group-item book-container"
            key={book.id}>
            <div className="book-title-wrapper">
              <span>{book.title}</span>
              <span onClick={() => { this.props.selectBook(book); } }>see details</span>
            </div>
            <div className="link-wrapper">
                <Link
                    className="link"
                    to={link}>
                    Edit
                </Link>
                <button
                    onClick={() => { this.props.openModal(book); } }>
                    delete
                </button>
                <div className="move-buttons-wrapper">
                    <button disabled={ i === 0} onClick={() => this.props.moveUp(book)}>Up</button>
                    <button disabled={ i === filteredBooks.length - 1 } onClick={() => this.props.moveDown(book)}>Down</button>
                </div>
            </div>
        </div>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-12">
        { this.renderList() }
      </ul>
    );
  }

}

function mapStateToProps(state) {
  //what is returned will be props inside BookList
  // const books = state.books.present.map((item) => {
  //     item.show = true;
  //     return item;
  // })
  return {
    books: state.books.present,
    search: state.search
    // books: state.books
  };
}

// this function returns into props of bookList container
function mapDispatchToProps(dispatch) {
  //when selectBook is called, result is passed to all reducers
  //which is done with dispatch.
  //value in object that is passed in references the
  //action creator 'selectBook'. makes it available in BookList as
  //prop 'this.props.selectBook'
  return bindActionCreators({selectBook: selectBook, deleteBook: deleteBook, openModal, moveUp, moveDown }, dispatch)
}

//connect function glues this function to the component to create
//a container <BookList />
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
