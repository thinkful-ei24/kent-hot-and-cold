import React from 'react';
import PropTypes from 'prop-types';

import './top-nav.css';

export default function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a className="what" href="#" onClick={ () =>
            props.toggleModal()
          }>
            What?
          </a>
        </li>
        <li>
          <a className="new" href="#">
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}

TopNav.propTypes = {
  toggleModal:PropTypes.func
};
