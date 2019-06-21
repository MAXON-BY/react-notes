import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './NavBar.scss'

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h1>ReactNotes</h1>
                <div className="navbar-buttons">
                    <Link className="btn" to="/add"> + Add Note</Link>
                </div>
            </nav>
        );
    }
}

export default NavBar;