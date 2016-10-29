import React, {Component} from 'react';
import styles from './NavBar.stylesheet.css';
import { Link } from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <ul className={styles.NavBar}>
        <li><Link to='/'>Profile</Link></li>
        <li><Link to='match'>My match</Link></li>
        <li><Link to='group'>Group</Link></li>
        <li><Link to='rules'>Rules</Link></li>
      </ul>
    );
  }
}

export default NavBar;
