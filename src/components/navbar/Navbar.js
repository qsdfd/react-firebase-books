import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey darken-3">
                        <Link to="/" className="brand-logo left">
                            <i className="fas fa-book" /> Books
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;