import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook, closeModal } from '../actions/index';
import { bindActionCreators } from 'redux';

class ConfirmationModal extends Component {
    handleConfirm(obj) {
        this.props.closeModal(obj);
        this.props.deleteBook(obj);
    }

    renderModals() {
        console.log('state in modal comp: ', this.props)
        if (!this.props.modals || !this.props.modals.length) return <div>No Modal</div>;
        return this.props.modals.map((obj, i) => {
                return (
                    <div key={i} className="overlay">
                        <div className="my-modal">
                            <p>Are you sure you want to delete {obj.title}?</p>
                            <button onClick={() => {this.handleConfirm(obj)}}>Confirm</button>
                            <button onClick={() => {this.props.closeModal(obj)}}>Cancel</button>
                        </div>
                    </div>
                );
            });
    }

  render() {
      return (
                 <div>
                    {this.renderModals()}
                 </div>
             )
         }
}

function mapStateToProps(state) {
  //what is returned will be props inside this component
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteBook, closeModal }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationModal);
