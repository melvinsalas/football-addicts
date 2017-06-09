import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';    

class Team extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {team, leagueId} = this.props;
        return (
            <Link to={`/team/${leagueId}/${team._links.self.href.substr(team._links.self.href.lastIndexOf('/') + 1)}`}>
                <div className="panel panel-default team">
                    <div className="panel-body text-center">
                        <h4>{team.name}</h4>
                        <img src={team.crestUrl} alt={team.shortname} class="img-circle img-responsive" height="100px" />
                    </div>
                </div>
            </Link>
        );
    }
};
export default Team;