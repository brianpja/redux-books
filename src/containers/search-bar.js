import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSearch } from '../actions/index';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input
                    placeholder="search by title"
                    onChange={(e) => this.props.updateSearch(e.target.value)} />
                <img src="https://picsum.photos/40/40" />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSearch }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
