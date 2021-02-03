import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles';

export default WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer/>
    </SpinnerOverlay>
  ) : (
      <WrappedComponent {...props} />
  )
}

// More readable way
// export default (WrappedComponent) => {
//   const Spinner = ({ isLoading, ...props }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//         <WrappedComponent {...props} />
//       )
//   }
//   return Spinner;
// }