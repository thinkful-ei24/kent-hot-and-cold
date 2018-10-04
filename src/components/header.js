import React from 'react';
import PropTypes from 'prop-types';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  let modalElement;
  if (props.modal) {
    modalElement = <InfoModal toggleModal={() => props.toggleModal()}/>;
  }
  return (
    <header>
      <TopNav toggleModal={() => props.toggleModal()}/>
      {modalElement}
      <h1>HOT or COLD</h1>
    </header>
  );
}

Header.propTypes = {
  modal:PropTypes.bool,
  toggleModal:PropTypes.func
};