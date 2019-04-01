import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Translate } from 'react-localize-redux';

import LanguageToggle from '../localize/LanguageToggle';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({ auth, profile }) => {
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-3">
          <Link to="/" className="brand-logo left">
            <i className="fas fa-book main-logo" /> <Translate id="title" />
          </Link>
          <LanguageToggle />
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
