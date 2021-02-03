import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverview.container'
import CollectionContainer from '../Collection/Collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const Shop = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:id`} component={CollectionContainer}/>
    </div>
  );
 };


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);