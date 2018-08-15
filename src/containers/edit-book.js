import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { updateBook } from '../actions/index';

class EditBook extends Component {

  getBook() {
      for (const book of this.props.books.present) {
          if (book.id == this.props.match.params.id) return book;
      }
  }

  render() {
    const book = this.getBook();
    return (
        <div>
            <div>Edit the details of {book.title}</div>
            <form onSubmit={(e) => {
                e.preventDefault();
                const newBook = Object.assign({}, book, {
                    title: e.target.newTitle.value,
                    pages: e.target.newPages.value
                })
                this.props.updateBook(newBook);
                this.props.history.push('/');
                }
            }>
                <label htmlFor="newTitle">Title</label>
                <input id="newTitle" name="newTitle" defaultValue={book.title} />
                <label htmlFor="newPages">Number of Pages</label>
                <input id="newPages" name="newPages" defaultValue={book.pages} />
                <button type="submit">Save</button>
            </form>
            <Link className="link" to='/'>Back to Home</Link>
        </div>
    );
  }
}

function mapStateToProps(state) {
  //what is returned will be props inside BookList
  // return state.present;
  return state;
}

//this function returns into props of bookList container
function mapDispatchToProps(dispatch) {
  //when selectBook is called, result is passed to all reducers
  //which is done with dispatch.
  //value in object that is passed in references the
  //action creator 'selectBook'. makes it available in BookList as
  //prop 'this.props.selectBook'
  return bindActionCreators({ updateBook }, dispatch)
}

//connect function glues this function to the component to create
//a container <BookList />
export default connect(mapStateToProps, mapDispatchToProps)(EditBook);
