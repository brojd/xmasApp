import React, {Component} from 'react';
import styles from './Group.stylesheet.css';
import classNames from 'classnames';

class Group extends Component {
  render() {
    return (
      <div className={classNames(styles.Group, 'uk-width-2-10')}>group component</div>
    );
  }
}

export default Group;
