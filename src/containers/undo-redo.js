import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from 'redux-undo';

class UndoRedo extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.undo} disabled={!this.props.past.length}>Undo</button>
                <button onClick={this.props.redo} disabled={!this.props.future.length}>Redo</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.books;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ undo: ActionCreators.undo, redo: ActionCreators.redo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
