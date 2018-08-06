import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import AddBook from '../containers/add-book';
import ConfirmationModal from '../containers/confirmation-modal';



export default class App extends Component {
    componentDidMount() {
        console.log('app props', this.props)
    }
  render() {
    return (
      <div>
        <BookList />
        <AddBook />
        <BookDetail />
        <ConfirmationModal />
      </div>
    );
  }
}
