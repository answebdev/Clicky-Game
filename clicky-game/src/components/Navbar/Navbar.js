import React, { Component } from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Clicky Game</a>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span className="navbar-brand" id="instructions">Click on an image to begin!</span>
                        </li>
                        <li className="nav-item">
                            <span className="navbar-brand" id="score">Score: 0 | Top Score: 0</span>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;