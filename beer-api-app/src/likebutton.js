import React from 'react';
import './App.css';


class LikeButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
      this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
      this.setState({ liked: !this.state.liked});
    }
    render() {
      let buttonText = this.state.liked? 'Unlike': 'Like';
      return (
        <button onClick={this.handleClick} className="like">
          {buttonText}</button>
       );
    }
  }
 
export default LikeButton;