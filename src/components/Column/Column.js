import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import ReactHtmlParser from 'react-html-parser';



class Column extends React.Component {
    static propTypes = {
        column: PropTypes.string,
        
    }
    
    render() {
        return (
            <section className={styles.component} >
                <h3 className={styles.title}>
                {this.props.column1}
                {this.props.column2}
                {this.props.column3}
                </h3>
            </section>
    )
  }
}

export default Column;
