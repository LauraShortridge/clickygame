import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    friends
    };
  // this.shuffle = this.shuffle.bind(this);
  }

  shuffle = () => {
    console.log("Shuffle works")
    let ctr = this.state.friends.length;
    let temp; 
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = friends[ctr];
      friends[ctr] = friends[index];
      friends[index] = temp;
    }
    this.setState({ friends });
  }

  makeScore = () => {
    let score = this.score;
    let topScore = this.topScore;

    console.log(score, topScore)
    console.log("score is working")
    // let count = this.props.score
    // let topScore = this.props.topScore; 

    // if (count < 12) {
    //   count ++
    // }

    
  }


  //Increase score by one if the pic hasn't been clicked before
  //Shuttle cards
  //If the card has been clicked, end game
  //Once the game is over, see if game score is higher than pervious score, if it is then make it top score
  // clickAPic = id => {
  //   let score = 0; 
  //   let topScore = 0; 
  // }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          makeScore={this.makeScore}
          score={0}
          topScore={0}>
        </NavBar>
        <Title>Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
