import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard, getCardsForColumns} from '../../redux/CardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard ({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps )(Column);