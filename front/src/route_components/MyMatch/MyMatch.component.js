import React, {Component} from 'react';
import styles from './MyMatch.stylesheet.css';
import classNames from 'classnames';

class MyMatch extends Component {
  render() {
    return (
      <div className={classNames(styles.MyMatch, 'uk-width-2-10')}>MyMatch component</div>
    );
  }
}

export default MyMatch;
