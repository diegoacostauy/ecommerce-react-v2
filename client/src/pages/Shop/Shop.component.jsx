import React, { useEffect, lazy, Suspense } from 'react'
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import Spinner from '../../components/Spinner/Spinner.component';

const CollectionOverviewContainer = lazy(() => import('../../components/CollectionOverview/CollectionOverview.container'));
const CollectionContainer = lazy(() => import('../Collection/Collection.container'));

const Shop = ({ fetchCollectionsStart, match }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
        <Route path={`${match.path}/:id`} component={CollectionContainer}/>
      </Suspense>
    </div>
  );
 };


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop);