import React from 'react';
import { render } from 'react-dom';
import styles from './footer.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <div className="container">
                    Football Addict 2017 - Designed and built by @melvinsalas.
                </div>
            </footer>
        );
    }
};
export default Footer;