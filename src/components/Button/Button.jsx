import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    return(
      <button
        className={`Button ${
          (this.props.className) ? this.props.className : " "
        }`}
        onClick={this.props.onClick}
      ><span>{this.props.text}</span></button>
    )
  }

}

export default Button;