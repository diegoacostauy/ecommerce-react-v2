import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from './ErrorBoundary.styles'


class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    // process error, return an object representing the new state
    return {
      hasErrored: true
    }
  }

  // info is which component has thrown the error
  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) return (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl={'https://i.imgur.com/yW2W9SC.png'}/>
        <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
      </ErrorImageOverlay>
    )
    return this.props.children
  }

}

export default ErrorBoundary;