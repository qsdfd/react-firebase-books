import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper teal lighten-2">
                        <Link to='/' className="brand-logo left">
                            <i className="fas fa-book"></i> Books
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;