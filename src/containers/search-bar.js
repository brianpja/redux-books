import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input
                    placeholder="search by title"
                    onChange={(e) => console.log(e.target.value)} />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({  }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
