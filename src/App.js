import React, { Component } from 'react';
import './App.scss';
import MyGame from './components/MyGame/MyGame'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'
import Alert from './components/Alert/Alert'
import Dropdown from './components/Dropdown/Dropdown'
import Input from './components/Input/Input'
import Tab from './components/Tab/Tab'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: '',
      gameList: [
        'Qake',
        'Mario',
        'Contra',
        'Diablo',
        'Sims',
        'Minecraft'
      ],
      modal: null,
      alertList: {
        error: 'Oh no, you broke everything!',
        success: 'Congratulations! Everything is good :) ',
        warning: 'Attention! Something going wrong',
        info: 'Important information here'
      },
      tabTextList: {
        tab1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        tab2: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in',
        tab3: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
      },
      tabContent: null,
      alertError: null,
      alertSuccess: null,
      alertWarning: null,
      alertInfo: null,
      dropdown: null,
      active: false,
      dropdownList: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      inputPlaceholder: 'Choose your item',
      
    }
  }


  componentDidMount() {
    this.setRandomGame();
    // this.toggleClass();
  }

  render() {
    
    return (
      <div>
        <MyGame currentGame={this.state.currentGame} 
                changeGame={this.onButtonClick}/>

        <Button text="open modal" onClick={() => {
          if(this.state.modal) {
            this.setState({modal: null})
          } else {
          this.setState({modal: <Modal 
            onCloseModal={() => this.setState({modal: null})}>
            <h1>Hello</h1> 
            </Modal>})
          }
        }}/>
        {this.state.modal}
        
        <div className="wrapper">
           <Button text="success" className={'-success'} onClick={() => {
            this.setState({
              alertError: <Alert className={'-success'}
              onCloseAlert={() => this.setState({alertError: null})}
              >
                <span>{this.state.alertList.success}</span>
              </Alert>
            });
          }} />
          <Button text="error" className={'-error'} onClick={() => {
            this.setState({
              alertSuccess: <Alert className={'-error'} onCloseAlert={() => this.setState({alertSuccess: null})}>
                <span>{this.state.alertList.error}</span>
              </Alert>
            });
          }} />
          <Button text="warning" className={'-warning'} onClick={() => {
            this.setState({
              alertWarning: <Alert className={'-warning'} onCloseAlert={() => this.setState({alertWarning: null})}>
                <span>{this.state.alertList.warning}</span>
              </Alert>
            });
          }} />
           <Button text="info" className={'-info'} onClick={() => {
            this.setState({
              alertInfo: <Alert className={'-info'} onCloseAlert={() => this.setState({alertInfo: null})}>
                <span>{this.state.alertList.info}</span>
              </Alert>
            });
          }} />
          {this.state.alertError} 
          {this.state.alertSuccess} 
          {this.state.alertWarning} 
          {this.state.alertInfo}

        </div>
        <Input className={this.state.active ? 'active': 'input_placeholder'} placeholder={this.state.inputPlaceholder} onClick={() => {
          // this.toggleClass(this);
           if(this.state.dropdown) {
            this.setState({dropdown: null})
          } else {
          this.setState({dropdown: <Dropdown item={this.state.dropdownList.map(function(item, index) {
            return <li  key={index}><span>{item}</span></li>
          })}>
            </Dropdown>})
          }
        }} 
        
        />
        {this.state.dropdown}



      <div className="wrapper">
        <Button text="Tab1" className={'-tab'} onClick={() => {
          this.setState({
            tabContent: <Tab Tabtext={this.state.tabTextList.tab1}>
            </Tab>
          });
        }} />
        <Button text="Tab2" className={'-tab'} onClick={() => {
            this.setState({
              tabContent: <Tab Tabtext={this.state.tabTextList.tab2}>
              </Tab>
            });
        }} />
        <Button text="Tab3" className={'-tab'} onClick={() => {
            this.setState({
              tabContent: <Tab Tabtext={this.state.tabTextList.tab3}>
              </Tab>
            });
        }} />
        {this.state.tabContent} 
      </div>

      </div>
    )
  }

  onButtonClick = () => {
    this.setRandomGame();
  };

// toggleClass(element) {
//     if(!element.classList.contains('active')) {
//       element.classList.add('active');
//     } else {
//       element.classList.remove('active');
//     }
// };


  setRandomGame() {
    this.setState({
      currentGame: this.state.gameList[Math.floor(Math.random() * (this.state.gameList.length))]
    })
  };

}

export default App;

//////////Alert component
//////////Tabs
///////////Dropdown