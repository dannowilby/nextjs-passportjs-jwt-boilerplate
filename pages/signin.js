import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';

import { login } from '../util/network';

import styles from './styles.scss';

const Signin = ({ token }) => (
  <Container className="w-25 my-4">
    <Form>
        <h1><Link href='/'><a className={styles.passport_title}>The Boilerplate</a></Link></h1>
        <hr />

        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Input type="password" name="password" id="password" placeholder="Password" />
        </FormGroup>

        <Button outline color="primary" block onClick={() => {
          login(token, document.getElementById('email').value, document.getElementById('password').value)
        }}>Sign in</Button>

        <p className="my-3 text-muted">Don't have an account? <Link prefetch href='/register'><a>Sign up</a></Link></p>
      </Form>
  </Container>
);

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  token: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
