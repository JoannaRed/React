import React from 'react';
//import styles from '../FAQ/FAQ.scss';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { settings } from '../../data/dataStore';

const FAQ = () => (
  <div>
    <Container>
      <Hero titleImg={settings.faq.link} titleText={settings.faq.title} />
    </Container>
  </div>
);

export default FAQ;