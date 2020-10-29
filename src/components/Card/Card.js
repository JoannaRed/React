import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propsTypes = {
        title: PropTypes.string,
    }

    render () {
        const {title} = this.props;
        return (
            <section className={styles.Component}>
                <h3 >{title}</h3>
            </section>
        );
    }
}


export default Card;