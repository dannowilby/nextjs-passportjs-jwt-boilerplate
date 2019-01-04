import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Container, Button } from 'reactstrap';

import styles from './styles.scss';

const Index = ({ token }) => (
  <Container className="text-center my-4">
    <h3>This is a boilerplate.</h3>
    <p><Link prefetch href='/home'><a>another page</a></Link></p>

    <Button className="px-4" outline color="primary" onClick={() => {
        alert(token)
    }}>Show Login Token</Button>

  </Container>
);

const mstp = (state) => ({
  token: state.token
});

const mdtp = (dispatch) => ({});

export default connect(mstp, mdtp)(Index);
