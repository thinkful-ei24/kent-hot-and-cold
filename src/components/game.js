import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      currentGuess: null,
      guesses: [],
      feedback: 'Make your guess!',
      answer: Math.floor(Math.random() * 100) + 1
    };
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setCurrentGuess(value) {
    this.setState({
      currentGuess: Number(value)
    });
  }

  addGuess(e) {
    e.preventDefault();
    document.getElementById('userGuess').value = '';
    const guess = this.state.currentGuess;
    if (this.state.guesses.includes(guess)) {
      this.setState({
        currentGuess: null,
        feedback: 'You already guessed that number!'
      });
    } else if (guess > 100 || guess < 1 || guess === null) {
      this.setState({
        currentGuess: null,
        feedback: 'Please guess a number between 1 to 100'
      });
    } else {
      const difference = Math.abs(this.state.answer - guess);
      let feedback;
      console.log(difference);
      if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
      } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
      } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
      } else {
        feedback = 'You got it!';
      }
      this.setState({
        currentGuess: null,
        guesses: [...this.state.guesses, guess],
        feedback: feedback
      });
    }
  }

  newGame() {
    this.setState({
      modal: false,
      currentGuess: null,
      guesses: [],
      feedback: 'Make your guess!',
      answer: Math.floor(Math.random() * 100) + 1
    });
  }

  render() {
    return (
      <div>
        <Header
          toggleModal={() => this.toggleModal()}
          newGame={() => this.newGame()}
          modal={this.state.modal}
        />
        <GuessSection
          feedback={this.state.feedback}
          setCurrentGuess={value => this.setCurrentGuess(value)}
          addGuess={e => this.addGuess(e)}
        />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

