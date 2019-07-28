import React, { Component } from 'react';
import './Tab.scss';

class Tab extends React.Component {
  render () {
    return (
      <div className="Tab">
        <p>
        {this.props.Tabtext}
          </p>
      
      </div>
      
    );
  }
}

export default Tab;