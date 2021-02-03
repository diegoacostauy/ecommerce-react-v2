import React from 'react';
import Menuitem from '../Menuitem/Menuitem.component';
import './Directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({sections}) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...rest }) => (
        <Menuitem key={id} {...rest} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory);