// Date Component. Used in Calendar Component for the mood tracker
import React from 'react';

class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleEmptyClick = this.handleEmptyClick.bind(this);
    this.handleContentClick = this.handleContentClick.bind(this);
    this.handleHappyClick = this.handleHappyClick.bind(this);
    this.handleAnxiousClick = this.handleAnxiousClick.bind(this);
    this.handleDepressedClick = this.handleDepressedClick.bind(this);
    this.handleAngryClick = this.handleAngryClick.bind(this);
    
    // the state will either be set to the last key in local storage, or it will default to {buttonValue: 0}
    this.state = JSON.parse(localStorage.getItem('key')) || {buttonValue: 0};

    // setting the local storage
    localStorage.setItem('key', JSON.stringify(this.state));

    if (localStorage.state !== {buttonValue: 0}) {
      // this.state = {buttonValue: 0};
      this.state = JSON.parse(localStorage.getItem('key'));
    }
    else {
      this.state = {buttonValue: 0};
    }
  }

  handleEmptyClick() {
    console.log("FUNCTION EMPTY FIRE");
    this.setState({buttonValue: 0});
  }

  handleContentClick() {
    console.log("FUNCTION CONTENT FIRE");
    this.setState({buttonValue: 1});
  }

  handleHappyClick() {
    console.log("FUNCTION HAPPY FIRE");
    this.setState({buttonValue: 2});
  }

  handleAnxiousClick() {
    console.log("FUNCTION ANXIOUS FIRE");
    this.setState({buttonValue: 3});
  }

  handleDepressedClick() {
    console.log("FUNCTION DEPRESSED FIRE");
    this.setState({buttonValue: 4});
  }

  handleAngryClick() {
    console.log("FUNCTION ANGRY FIRE");
    this.setState({buttonValue: 5});
  }

  render() {
    const buttonValue = this.state.buttonValue;
    console.log(this.state);

    /*
    let myObj = {};
    myObj.id = 1;
    let newArr = [];
    
    for (let i = 0; i <= 31; i++ ) {
      myObj.id = i;
      newArr.push(myObj.id);
      console.log(`The ID is: ${newArr[i]}`);
    }
    */
    
    let button = null;
    switch (buttonValue) {
      case 0: // no mood entered = default white; style comes from .date class on MoodTracker/moodTracker.css
        button = <button className="date" id={this.props.value} onClick={this.handleContentClick}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 0}));
        break;
      case 1: // content mood = dusty rose
        button = <button className="date" id={this.props.value} onClick={this.handleHappyClick} style={{ backgroundColor: '#4fb69a'}}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 1}));
        break;
      case 2: // happy mood = goldenrod yellow
        button = <button className="date" id={this.props.value} onClick={this.handleAnxiousClick} style={{ backgroundColor: '#f5f579'}}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 2}));
        break;      
      case 3: // anxious mood = lime green
        button = <button className="date" id={this.props.value} onClick={this.handleDepressedClick} style={{ backgroundColor: '#b71b37'}}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 3}));
        break;
      case 4: // depressed mood = grey blue
        button = <button className="date" id={this.props.value} onClick={this.handleAngryClick} style={{ backgroundColor: '#282643', color: 'white'}}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 4}));
        break;
      case 5: // angry mood = brick red
        button = <button className="date" id={this.props.value} onClick={this.handleEmptyClick} style={{ backgroundColor: '#660000', color: 'white'}}>{this.props.value}</button>;
        localStorage.setItem('key', JSON.stringify({buttonValue: 5}));
        break;
      default:
        // do nothing
    }
    return button;
  }
}

// Date compontent. Functonal component.
const Date = (props) => {
  console.log(props.value);

  return (
    <ButtonSwitch value={props.value} />
  );
}

export default Date;