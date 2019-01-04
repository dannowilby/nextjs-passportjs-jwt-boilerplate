import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';
import { Container, Button, Form, FormGroup, Input } from 'reactstrap';

import { register } from '../util/network';

import styles from './styles.scss';

const Register = ({ token, error }) => (
  <Container className="w-25 my-4">
    <Form>
        <h1><Link href='/'><a className={styles.passport_title}>The Boilerplate</a></Link></h1>
        <hr />

        <FormGroup>
          <Input type="email" name="email" id="email" placeholder="Email" />
        </FormGroup>

        <FormGroup>
          <Input type="password" name="password" id="password1" placeholder="Password" />
        </FormGroup>

        <FormGroup>
          <Input type="password" name="password" id="password2" placeholder="Re-type Password" />
        </FormGroup>

        <Button outline color="primary" block onClick={() => {
          register(token, document.getElementById('email').value, document.getElementById('password1').value, document.getElementById('password2').value);
        }}>Register</Button>

        <p className="my-3 text-muted">Already have an account? <Link prefetch href='/signin'><a>Sign in</a></Link></p>
        <p className="my-3 text-danger">{error}</p>
      </Form>
  </Container>
);

const mapStateToProps = (state) => ({
  error: state.register_error
});

const mapDispatchToProps = (dispatch) => ({
  token: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
