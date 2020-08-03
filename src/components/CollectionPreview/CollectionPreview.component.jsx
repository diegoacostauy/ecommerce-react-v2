import React from 'react';
import './CollectionPreview.styles.scss';
import CollectionItem from '../CollectionItem/CollectionItem.component';

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter((item, idx) => idx < 4) //.slice(0,4) would work
          .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))
      }
    </div>
  </div>
);

export default CollectionPreview;