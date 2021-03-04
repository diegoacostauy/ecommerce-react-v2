import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem.component';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './Collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  )
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.id)(state)
});

export default connect(mapStateToProps, null)(Collection);
