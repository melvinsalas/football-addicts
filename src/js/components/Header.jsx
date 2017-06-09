import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="navbar navbar-default hola">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to='/' className="navbar-brand">Football</Link>
                    </div>
                </div>
            </nav>
        );
    }
};
export default Header;