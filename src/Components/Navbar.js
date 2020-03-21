import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <div className="nav-left">

                            <ul className="nav-links">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/reserve">Reserve</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                </ul>
                            </div>
                            <div className="nav-right">
                                <ul className="nav-links">
                                <li>
                                    <Link to="/login">Log in</Link>
                                </li>
                                <li>
                                    <Link to="/singin">Sing in</Link>
                                </li>
                        </ul>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }
}
