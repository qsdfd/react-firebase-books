import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';
import { signOutAction } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, profile }) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">
          <Translate id="newBook" />
        </NavLink>
      </li>
      <li>
        <a href="" onClick={signOut}>
          <Translate id="logOut" />
        </a>
      </li>
      <li>
        <NavLink to="/" className='btn btn-floating pink lighten-1'>
          {profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOutAction())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
