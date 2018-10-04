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
      feedback: 'Make your guess!'
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
        feedback: 'You already guessed that number!'
      });
    } else if (guess > 100 || guess < 1 || guess === null) {
      this.setState({
        feedback: 'Please guess a number between 1 to 100'
      });
    } else {
      this.setState({
        guesses: [...this.state.guesses, guess]
      });
    }
  }

  render() {
    return (
      <div>
        <Header toggleModal={() => this.toggleModal()} modal={this.state.modal} />
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

