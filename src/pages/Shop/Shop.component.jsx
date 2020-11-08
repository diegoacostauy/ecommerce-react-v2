import React from 'react'
import { Route } from 'react-router-dom';
import './Shop.styles.scss';
import CollectionOverview from '../../components/CollectionOverview/CollectionOverview.component'
import Collection from '../Collection/Collection.component';

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:id`} component={Collection} />
    </div>
  )
 };

export default Shop;