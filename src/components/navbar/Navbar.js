import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Translate} from 'react-localize-redux';

import LanguageToggle from '../localize/LanguageToggle'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper grey darken-3">
                    <Link to="/" className="brand-logo left">
                        <i className="fas fa-book" /> <Translate id="title"/>
                    </Link>
                    <LanguageToggle/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
