import React from 'react';
import PropTypes from 'prop-types';

import './guess-form.css';

export default function GuessForm(props) {
  return (
    <form onSubmit={e => props.addGuess(e)}>
      <input type="text" name="userGuess" id="userGuess"
        className="text" maxLength="3" autoComplete="off"
        placeholder="Enter your Guess" required onChange={(e) => {
          props.setCurrentGuess(e.target.value);
        }}/>
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
  );
}

GuessForm.propTypes = {
  setCurrentGuess: PropTypes.func,
  addGuess: PropTypes.func
};