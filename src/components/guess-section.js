import React from 'react';
import PropTypes from 'prop-types';
import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  return (
    <section>
      <h2 id="feedback">{props.feedback}</h2>
      <GuessForm
        setCurrentGuess={value => props.setCurrentGuess(value)}
        addGuess={e => props.addGuess(e)}
      />
    </section>
  );
}

GuessSection.propTypes = {
  feedback:PropTypes.string,
  setCurrentGuess:PropTypes.func,
  addGuess:PropTypes.func
};
