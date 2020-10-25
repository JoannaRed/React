import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        img: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
    render() {
        return (
            <section className={styles.component} >
                <Hero titleText={this.props.title} titleImg={this.props.img} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column column1={<h3>Animals</h3>} />
                    <Column column2={<h3>Plants</h3>} />
                    <Column column3={<h3>Minerals</h3>} />

                </div>
            </section>
    )
  }
}

export default List;
