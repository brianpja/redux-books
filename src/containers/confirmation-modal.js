import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBook, closeModal } from '../actions/index';
import { bindActionCreators } from 'redux';

class ConfirmationModal extends Component {
    overlayClick(e, obj) {
        console.log('overlay click');
        console.log('e target: ', e.target)
        console.log('current target: ', e.currentTarget);
        if (e.target === e.currentTarget) this.props.closeModal(obj);
    }

    handleConfirm(obj) {
        this.props.closeModal(obj);
        this.props.deleteBook(obj);
    }

    renderModals() {
        console.log('state in modal comp: ', this.props)

        return this.props.modals.map((obj, i) => {
                return (
                    <div key={i} className="overlay" onClick={(e) => {this.overlayClick(e, obj)}}>
                        <div className="my-modal">
                            <span>Are you sure you want to delete {obj.title}?</span>
                            <button onClick={() => {this.handleConfirm(obj)}}>Confirm</button>
                            <button onClick={() => {this.props.closeModal(obj)}}>Cancel</button>
                        </div>
                    </div>
                );
            });
    }

  render() {
      if (!this.props.modals || !this.props.modals.length) return <div></div>;
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
