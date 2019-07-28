import React from 'react';
import './Alert.scss';

class Alert extends React.Component {
  render() {
    return(
      <div className={`Alert ${(this.props.className) ? this.props.className : " "}`}>
        <span className="Alert__close" onClick={this.props.onCloseAlert}></span>
        <div className="Alert__content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Alert;