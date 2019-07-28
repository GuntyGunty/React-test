import React from 'react';
import './Input.scss';

class Input extends React.Component {
  render () {
    return (
      <div className="Input">
        <label>  
          <input type="hidden" className={"Input_field"}  value={this.props.value}  />
          <span className={`Input_placeholder ${(this.props.className) ? this.props.className : " "}`} 
          onClick={this.props.onClick}>{this.props.placeholder}</span>
        </label>
      </div>
    );
  }
}

export default Input;