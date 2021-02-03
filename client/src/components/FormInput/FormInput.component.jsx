import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({handleChange, label, ...rest}) => (
  <div className="form-group">
    <input
      className="form-control"
      onChange={handleChange}
      {...rest}
    />
    {
      label ?
        (
          <label className={`${rest.value ? 'shrink' : ''} form-label`}>{label}</label>
        ) :
        null
    }
  </div>
);

export default FormInput;