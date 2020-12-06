import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component'
import Collection from '../Collection/Collection.component';
import { fetchCollectionsStartThunk } from '../../redux/shop/shop.actions';
import { selectIsCollecitonLoaded } from '../../redux/shop/shop.selector';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionWithSpinner = WithSpinner(Collection);
class Shop extends Component {
  // state = {
  //   isLoading: true
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartThunk } = this.props;
    fetchCollectionsStartThunk();
  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection('collections');

  //   // Observable way
  //   // collectionRef.onSnapshot( snap => {
  //   //   const collectionsMap = convertCollectionSnapToMap(snap);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({isLoading: false})
  //   // })

  //   // This two ways are not refreshing data in real time, only when component
  //   // mounts
  //   // Api Rest way
  //   // fetch('https://firestore.googleapis.com/v1/projects/ecommerce-react-v2/databases/(default)/documents/collections')
  //   //   .then(res => res.json())
  //   //   .then(data => console.log(data))

  //   // Promise based call to firestorte
  //   collectionRef.get()
  //     .then(snap => {
  //       const collectionsMap = convertCollectionSnapToMap(snap);
  //       updateCollections(collectionsMap);
  //       this.setState({ isLoading: false })
  //     });
  }

  render() {
    const { match,  isCollectionLoaded} = this.props;
    // const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
        <Route path={`${match.path}/:id`} render={(props) => <CollectionWithSpinner isLoading={!isCollectionLoaded} {...props} />} />
      </div>
    );
  }
 };

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollecitonLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartThunk: () => dispatch(fetchCollectionsStartThunk())
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shop);