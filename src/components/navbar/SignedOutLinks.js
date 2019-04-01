import React from 'react';
import { NavLink } from 'react-router-dom';
import { Translate } from 'react-localize-redux';

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/signup"><Translate id="signUp"/></NavLink></li>
            <li><NavLink to="/signin"><Translate id="signIn"/></NavLink></li>
        </ul>
    );
};

export default SignedOutLinks;