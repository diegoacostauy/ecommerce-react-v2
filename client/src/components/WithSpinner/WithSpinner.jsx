import React from 'react';
import Spinner from '../Spinner/Spinner.component';

export default WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? (
    <Spinner/>
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