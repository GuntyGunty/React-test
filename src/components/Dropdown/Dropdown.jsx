import React from 'react';
import './Dropdown.scss';

class Dropdown extends React.Component {
  render () {
    return (
      <div className="Dropdown">
        <ul>
          {this.props.item}
        </ul>
      </div>
      
    );
  }
}

export default Dropdown;