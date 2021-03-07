import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './Spinner.styles';

const Spinner = isLoading => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;