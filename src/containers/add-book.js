import React, { Component } from 'react';
import { addBook } from '../actions/index.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class AddBook extends Component {


  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.addBook({
            title: e.target.title.value,
            pages: e.target.pages.value
           })
          }
        }>
          <input name="title" placeholder="Title" />
          <input name="pages" placeholder="Pages" />
          <button type="submit">Add new book</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addBook: addBook}, dispatch);
}


export default connect(null, mapDispatchToProps)(AddBook);
