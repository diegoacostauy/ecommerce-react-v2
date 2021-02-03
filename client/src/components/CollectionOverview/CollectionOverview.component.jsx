import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../CollectionPreview/CollectionPreview.component';
import './CollectionOverview.styles.scss';

const CollectionOverview = ({ collections }) => (
  <div className='collections-overview'>
    {
      collections.map(({ id, ...rest }) => (
        <CollectionPreview
          key={id}
          {...rest}
        />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps, null)(CollectionOverview);