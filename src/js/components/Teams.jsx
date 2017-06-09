import React from 'react';
import { render } from 'react-dom';
import { Team } from './';

class Teams extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    !this.props.teams.length && 
                    <div className="text-center">
                        <img src="../src/img/loading.gif" alt="" height="200px"/>
                    </div>
                }
                {this.props.teams.map(team => {
                    return (
                        team.name.toUpperCase().includes(this.props.search.toUpperCase()) &&
                        <div className="col-md-6" >
                            <Team 
                                team={team}
                                leagueId={this.props.leagueId} />
                        </div>
                    );
                })}
            </div>
        );
    }
};
export default Teams;