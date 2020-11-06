import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard, selectCardsForColumns} from '../../redux/CardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: selectCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard ({
    cardId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps )(Column);