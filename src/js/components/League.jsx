import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './league.scss'

class League extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={`/league/${this.props.league.id}`}>
                <div className="panel panel-default league">
                    <div className="panel-body text-center">
                        <h4>{this.props.league.caption}</h4>
                        <img className="img-responsive" src={`../src/img/leagues/${this.props.league.id}`} alt="" height="100px"/>
                        <span className="label label-default">{this.props.league.numberOfTeams} Teams</span>
                    </div>
                </div>
            </Link>
        );
    }
};
export default League;