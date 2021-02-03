import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../WithSpinner/WithSpinner';
import CollectionOverview from './CollectionOverview.component';

// Container Component doesnt render anything, they just pass props down to
// components

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// const collectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));
const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;