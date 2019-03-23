import React, {Component} from 'react';
import BookList from '../books/BookList';


class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <BookList/>
            </div>
        );
    }
}

export default Dashboard;