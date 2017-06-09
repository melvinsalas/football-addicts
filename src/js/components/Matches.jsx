import React from 'react';
import { render } from 'react-dom';
import { Match } from './';

class Matches extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let matches = this.props.matches.slice().reverse();
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item text-center"><h5>MATCH STATISTICS</h5></li>
                    {
                        !this.props.matches.length && 
                        <div className="text-center">
                            <img src="../../src/img/loading.gif" alt="" height="100px"/>
                        </div>
                    }
                    {matches.slice(0, 20).map(match => {
                        return (
                            <Match 
                                match={match}
                                teams={this.props.teams} />
                        );
                    })}
                </ul>
            </div>
        );
    }
};
export default Matches;