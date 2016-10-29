import React, {Component} from 'react';
import styles from './Profile.stylesheet.css';
import classNames from 'classnames';

class Profile extends Component {
  render() {
    return (
      <div className={classNames(styles.Profile, 'uk-width-2-10')}>Profile component</div>
    );
  }
}

export default Profile;
