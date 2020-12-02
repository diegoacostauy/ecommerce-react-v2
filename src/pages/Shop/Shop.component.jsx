import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component'
import Collection from '../Collection/Collection.component';
import { firestore, convertCollectionSnapToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class Shop extends Component {
  state = {
    isLoading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async snap => {
      const collectionsMap = convertCollectionSnapToMap(snap);
      updateCollections(collectionsMap);
      this.setState({isLoading: false})
    })
  }

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />} />
        <Route path={`${match.path}/:id`} render={(props) => <CollectionWithSpinner isLoading={isLoading} {...props} />} />
      </div>
    );
  }
 };

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);