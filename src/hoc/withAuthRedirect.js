import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.authUserData.isAuth
})

export const withAuthRedirect = (Component) => {
  
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />
      return <Component {...this.props} />
    }
  }

  let connectedWithAuthRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return connectedWithAuthRedirect;
};
