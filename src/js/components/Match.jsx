import React from 'react';
import { render } from 'react-dom';
import styles from './match.scss'
import moment from 'moment'

class Match extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { teams } = this.props;
        let { match } = this.props;
        let homeTeam = teams.filter(function (team) {
            return team.name == match.homeTeamName;
        })[0];
        let awayTeam = teams.filter(function (team) {
            return team.name == match.awayTeamName;
        })[0];
        let homeWin = match.result.goalsHomeTeam > match.result.goalsAwayTeam ? 'Win' : '';
        let awayWin = match.result.goalsAwayTeam > match.result.goalsHomeTeam ? 'Win' : '';
        var div = "";
        div = !!homeTeam && !!awayTeam &&
            <li className="list-group-item">
                <div className="match">
                    <div className="row text-center">
                        <div className="col-xs-3">
                            <img className="img-responsive" src={homeTeam.crestUrl} alt="" />
                            {homeTeam.code}
                        </div>
                        <div className="col-xs-6">
                            <div>{moment(match.date).format("ddd, MMMM Do YY")}</div>
                            <div className={`col-xs-6 score${homeWin}`}>
                                <h1>{match.result.goalsHomeTeam}</h1>
                            </div>
                            <div className={`col-xs-6 score${awayWin}`}>
                                <h1>{match.result.goalsAwayTeam}</h1>
                            </div>
                        </div>
                        <div className="col-xs-3">
                            <img className="img-responsive" src={awayTeam.crestUrl} alt="" />
                            {awayTeam.code}
                        </div>
                    </div>
                </div>
            </li>
        return (
            div
        );
    }
};
export default Match;