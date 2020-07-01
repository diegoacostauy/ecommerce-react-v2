import React from 'react';
import './Menuitem.styles.scss';

const Menuitem = ({id, title, imageUrl, size }) => (
  <div
    className={size ? `menu-item menu-item-${size}` : 'menu-item'}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
    </div>
    <div className="content">
      <h1 className="title">
        { title }
      </h1>
      <span className="subtitle">
        Shop Now
      </span>
    </div>
  </div>
);

export default Menuitem;