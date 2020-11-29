import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component'
import Collection from '../Collection/Collection.component';
import { firestore, convertCollectionSnapToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

class Shop extends Component {

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot( async snap => {
      const collectionsMap = convertCollectionSnapToMap(snap);
      updateCollections(collectionsMap);
    })
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:id`} component={Collection} />
      </div>
    );
  }
 };

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);