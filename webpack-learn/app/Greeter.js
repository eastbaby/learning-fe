import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css';
import { hot } from 'react-hot-loader/root'

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.greetText}
      </div>
    );
  }
}

export default hot(Greeter);
