import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className={css.div}>
        <p className={css.massage}>{message}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
