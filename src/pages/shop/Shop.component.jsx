import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container'
import CollectionContainer from '../Collection/Collection.container';
import { fetchCollectionsStartThunk } from '../../redux/shop/shop.actions';

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
    const { match } = this.props;
    // const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:id`} component={CollectionContainer}/>
      </div>
    );
  }
 };


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartThunk: () => dispatch(fetchCollectionsStartThunk())
//   updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop);