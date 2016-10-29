import React, {Component} from 'react';
import styles from './App.stylesheet.css';
import classNames from 'classnames';
import NavBar from '../../components/NavBar/NavBar.component';

class App extends Component {
  render() {
    return (
      <div className={classNames(styles.myApp, 'uk-width-2-10')}>
        <NavBar/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
