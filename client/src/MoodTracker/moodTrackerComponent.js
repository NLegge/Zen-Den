import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// Date compontent. Functonal component.
const Date = (props) => {
  return (
    <button className="date">
      {props.value}
    </button>
  );
}

// Calendar Class. Displays the calendar for users to click on
class Calendar extends React.Component {
  /* Not sure what's happening with this block yet
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  */

  renderSquare(i) {
    return ( 
      // two props are being passed down to Square, "value" and "onClick"
      // Square can call the onClick function
      <Date value={i}
      />
    ); 
  }

  render() {
    return(
      <div>
        <div className="calendar-row">
        </div>
        <div className="calendar-row">
        </div>
        <div className="calendar-row">
        </div>
        <div className="calendar-row">
        </div>
        <div className="calendar-row">
        </div>
        <div className="calendar-row">
        </div>
      </div>
    )
  }
}
