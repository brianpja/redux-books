import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import AddBook from '../containers/add-book';



export default class App extends Component {
    componentDidMount() {
        console.log(this.props)
    }
  render() {
    return (
      <div>
        <BookList />
        <AddBook />
        <BookDetail />
      </div>
    );
  }
}
