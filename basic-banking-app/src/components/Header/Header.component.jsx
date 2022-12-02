import React from 'react'
import { Link } from 'react-router-dom'
import './Header.component.scss'

const Header = () => {
    return (
        <header>
            <h3>Central Bank</h3>
            <ul className="nav-links">
                <li className="nav-link">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/customers">
                        Customers
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/transactions">
                        Transactions
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
