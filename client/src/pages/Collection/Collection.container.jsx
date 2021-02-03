import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollecitonLoaded } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollecitonLoaded(state)
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;