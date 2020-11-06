import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Creator from '../Creator/Creator.js';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
    
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.array,
      icon: PropTypes.node,
      addCard: PropTypes.func,
      image: PropTypes.node,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    
    render() {
      const {icon, cards, addCard} = this.props;

      return (
        <section className={styles.component}>
          < h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {this.props.title}
          </h3>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
          
          <div className={styles.creator}>
            <Creator text={settings.CardCreatorText} action={addCard} />
          </div>
          
        </section>	           
      );
    }
}

export default Column;
