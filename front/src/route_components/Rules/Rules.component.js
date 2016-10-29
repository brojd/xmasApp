import React, {Component} from 'react';
import styles from './Rules.stylesheet.css';
import classNames from 'classnames';

class Rules extends Component {
  render() {
    return (
      <div className={classNames(styles.Rules, 'uk-width-2-10')}>Rules component</div>
    );
  }
}

export default Rules;
