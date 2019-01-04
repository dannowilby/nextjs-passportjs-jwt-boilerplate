import React, { Component } from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';

import styles from './styles.scss';

export default class Error extends Component {

  static getInitialProps({ res, err }) {

    const statusCode = res ? res.statusCode : err ? err.statusCode : null;

    return { statusCode };
  }

  render() {

    return (

      <Container className="text-center my-4 py-4">

        <p className="font-weight-light">
          {
            this.props.statusCode ?
            `An error occurred on server` :
            'An error occurred on client'
          }
        </p>
        <p>{this.props.statusCode}</p>
        <Link prefetch href='/'><a>home</a></Link>

      </Container>
    )
  }
}
