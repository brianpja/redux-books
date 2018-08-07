import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import AddBook from '../containers/add-book';
import ConfirmationModal from '../containers/confirmation-modal';
import SearchBar from '../containers/search-bar'



export default class App extends Component {
    componentDidMount() {
        console.log('app props', this.props)
    }
  render() {
    return (
      <div className="main-wrapper">
        <div className="list-wrapper">
            <SearchBar />
            <BookList />
        </div>
        <div className="list-wrapper">
            <AddBook />
            <BookDetail />
        </div>
        <ConfirmationModal />
      </div>
    );
  }
}
