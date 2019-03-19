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
      friends,
      clickedFriends: [null],
      score: 0,
      topScore: 0
    };
  }

  shuffle = () => {
    console.log("Shuffle works");
    let ctr = this.state.friends.length;
    let temp;
    let index;

    // console.log("makeScore is working");
    // let score = this.state.score;
    // let topScore = this.state.topScore;
    // const friends = this.state.friends.filter(friend => friend.id);
    // const clickedFriends = this.state.clickedFriends;

    // if (score < 12) {
    //   score ++;
    //   // clickedFriends.push();
    // } else if (score === 12) {
    //   console.log("you won!")
    //   topScore = 12; 
    // }

    // console.log(score, topScore)
    // console.log(clickedFriends)
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
    
    state(); 
    // this.setState({
    //   friends
    //   // score, 
    //   // topScore
    // });
  }

  state() {
    this.setState({
      friends,
      score,
      topScore
    })
  }

  makeScore = id => {
    console.log("makeScore is working");
    let score = this.state.score;
    let topScore = this.state.topScore;
    const friends = this.state.friends;
    const clickedFriends = this.state.clickedFriends;
    let i; 

    for (i = 0; i < clickedFriends.length; i++) {
      if (id !== clickedFriends[i] && score < 12) {
        score++
        clickedFriends.push(id);
      } else if (score === 12) {
        console.log("you won!")
        topScore = 12;
      }
    }

    // if (id === clickedFriends[i] && score < 12) {
    //   score++
    //   clickedFriends.push(id);
    // } else if (score === 12) {
    //   console.log("you won!")
    //   topScore = 12;
    // }

    console.log(score, topScore)
    console.log(clickedFriends)

    this.setState({ friends, score, topScore })
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
          // makeScore={this.makeScore}
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
            makeScore={this.makeScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
