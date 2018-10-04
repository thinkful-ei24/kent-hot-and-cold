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
      currentGuess: 0,
      guesses: [10, 15, 25]
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
    this.setState({
      guesses: [...this.state.guesses, this.state.currentGuess]
    });
  }

  render() {
    return (
      <div>
        <Header toggleModal={() => this.toggleModal()} modal={this.state.modal} />
        <GuessSection
          feedback="Make your guess!"
          setCurrentGuess={value => this.setCurrentGuess(value)}
          addGuess={e => this.addGuess(e)}
        />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

