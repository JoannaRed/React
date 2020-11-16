import React from 'react';
import styles from '../FAQ/FAQ.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <div>
    <Container>
      <Hero link={settings.faq.link} />
      <div>
        <h1 className={styles.title}> {settings.faq.title} </h1>
        <p> Przykladowy tekst </p>
      </div>
    </Container>
  </div>
);

export default FAQ;
