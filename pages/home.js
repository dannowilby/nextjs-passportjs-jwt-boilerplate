import React from 'react';
import Link from 'next/link';
import { Container } from 'reactstrap';

import styles from './styles.scss';

const Home = () => (
  <Container className="text-center my-4">

    <div>
      <Link prefetch href='/register'><a className="mx-3">register</a></Link>
      <Link prefetch href='/signin'><a className="mx-3">signin</a></Link>
    </div>

    <Link prefetch href='/'><a>back</a></Link>
  </Container>
);

export default Home;
