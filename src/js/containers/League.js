import React from 'react';
import { render } from 'react-dom';
import { LeagueHeader, Teams, Matches, Footer } from '../components'
import styles from './league.scss'

class League extends React.Component {
    state = {
        teams: [],
        matches: [],
        league: {},
        search: ''
    }

    constructor(props) {
        super(props);
    }

    setSearchValue(e) {
        this.setState({
            search: e.target.value
        });
    }

    componentWillMount() {
        const self = this;

        var instance = axios.create({
            baseURL: 'http://api.football-data.org/v1',
            headers: { 'X-Auth-Token': '39df1d55732c488393927e68cfabcf5d' }
        });

        instance.get('/competitions/' + this.props.match.params.id + '/teams')
            .then(function (response) {
                console.log('teams', response.data);
                self.setState({
                    teams: response.data.teams
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        instance.get('/competitions/' + this.props.match.params.id + '/fixtures')
            .then(function (response) {
                console.log(response.data)
                self.setState({
                    matches: response.data.fixtures
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        instance.get('/competitions/' + this.props.match.params.id)
            .then(function (response) {
                console.log(response.data)
                self.setState({
                    league: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="leagueContainer">
                <LeagueHeader
                    search={this.state.search}
                    setSearchValue={this.setSearchValue.bind(this)}
                    leagueId={this.props.match.params.id}
                    league={this.state.league} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <Teams
                                teams={this.state.teams}
                                search={this.state.search}
                                leagueId={this.props.match.params.id} />
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <Matches
                                matches={this.state.matches}
                                teams={this.state.teams} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};
export default League;