import React, { Component } from 'react';
import './MyGame.scss';
import Button from './../Button/Button';


class MyGame extends React.Component {
  render() {
    return (
    
        <div className="MyGame">
          <div className="MyGame__text">
            <span>My favorite game is </span>
            <span className="-red">{this.props.currentGame}</span>
          </div>

          <Button
                onClick={this.props.changeGame}
                className={'-danger'}
                text="Сhoose your game"/>
      </div>
    )
  }

  onButtonClick = () => {
    this.props.changeGame();
  }

}

export default MyGame;
