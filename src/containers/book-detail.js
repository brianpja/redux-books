import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
      console.log('bookDetail props', this.props)
    if (!this.props.activeBook) {
      return <div>Select a book to get started.</div>
    }

    const book = pickBook(this.props.books, this.props.activeBook.id);

    return (
      <div>
        <h3>Details for: </h3>
        <div>Title: {book.title}</div>
        <div>Page count: {book.pages}</div>
      </div>
    );
  }
}

function pickBook(array, id) {
    for (const item of array) {
        if (id == item.id) return item;
    }
}

function mapStateToProps(state) {
  return {
    // book: state.present.activeBook
    activeBook: state.activeBook,
    books: state.books.present
  };
}

export default connect(mapStateToProps)(BookDetail);
