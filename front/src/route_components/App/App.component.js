import React, {Component} from 'react';
import styles from './App.stylesheet.css';
import classNames from 'classnames';

class App extends Component {
  render() {
    return (
      <div className={classNames(styles.myApp, 'uk-width-2-10')}>my xmas app</div>
    );
  }
}

export default App;
