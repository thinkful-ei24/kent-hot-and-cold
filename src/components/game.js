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
      guesses: [10, 15, 25]
    };
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Header toggleModal={() => this.toggleModal()} modal={this.state.modal} />
        <GuessSection feedback="Make your guess!" />
        <GuessCount count={this.state.guesses.length} />
        <GuessList guesses={this.state.guesses} />
      </div>
    );
  }
}

