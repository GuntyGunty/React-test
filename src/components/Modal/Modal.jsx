import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
  render () {
    return (
      <div className="Modal">
        <div className="Modal__overlay" onClick={this.props.onCloseModal}></div>
        <div className="Modal__content">
          <span className="Modal__close" onClick={this.props.onCloseModal}></span>
          {this.props.children}
        </div>
      </div>
      
    );
  }
}

export default Modal;