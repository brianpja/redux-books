const { render } = ReactDOM;
const { Component } = React;

function openModal(props) {
  const target = document.createElement('div');
  document.body.appendChild(target);

  const {
    children,
    ...rest
  } = props;

  render(
    <Modal {...rest} reference={target} >
      {children}
    </Modal>,
    target
  );
}

/* --- COMPONENTS --- */
class Modal extends Component {
    onClose(){
        this.props.reference.remove()
    }
  render() {
    const { text } = this.props;
    return (
            <div className="modal-wrapper">
                <div className="modal">
                     <button className="close" onClick={() => this.onClose()}>&times;</button>
                    <div className="text">{text}</div>
                </div>
            </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button className="test-button" onClick={() => openModal({
                        text: 'Modal Content'
                    })}>Open Modal</button>
      </div>
    );
  }
}

// Render the app
render(
    <App />,
    document.getElementById('app')
);
