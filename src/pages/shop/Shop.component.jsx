import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import './Shop.styles.scss';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const { collections } = this.state;
    return (
      <div>
        Shoppage
        {
          collections.map(({id, ...rest}) => (
            <CollectionPreview
              id={id}
              {...rest}
            />
          ))
        }

      </div>
    )
  }
}
