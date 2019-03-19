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
      topScore: 0,
      message: "Click on a picture to start!"
    };
  }

  shuffle = () => {
    console.log("Shuffle works");
    let ctr = this.state.friends.length;
    let temp;
    let index;

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

    this.setState({
      friends
    });
  }

  makeScore = id => {
    console.log("makeScore is working");
    let score = this.state.score;
    let topScore = this.state.topScore;
    const clickedFriends = this.state.clickedFriends;
    let message = this.state.message;

    console.log(clickedFriends.indexOf(id), "indexOf")

    if (clickedFriends.indexOf(id) === -1 && score < 12) {
      clickedFriends.push(id);
      score++;
      message = "Correct!";
      console.log(clickedFriends, "new clickedFriends")
      this.setState({clickedFriends, score, message});
    } else if (score === 12) {
      message = "You won!";
      console.log("you won!")
      this.setState({score: 0, clickedFriends: [null], topScore: 12, message})
    } else {
      console.log("you already clicked that, game over!")
      if (score > topScore) {
        topScore = score;
        message = "Game over! Try again."
        this.setState({score: 0, topScore, clickedFriends: [null], message})
      }
      // this.setState({score: 0, topScore, clickedFriends: [null], message})
    }

    console.log(this.state.score, score, this.state.topScore, topScore)
    console.log(clickedFriends, "bottom clickedFriends")

    // this.setState({ friends, score, topScore })
  }


  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}>
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
