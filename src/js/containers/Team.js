import React from 'react';
import { render } from 'react-dom';
import { TeamHeader, Players, Matches, Footer } from '../components'
import styles from './team.scss'

class Team extends React.Component {
    state = {
        players: [],
        matches: [],
        playersQueried: false,
        search: '',
        team: {},
        teams: []
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

        instance.get('/teams/' + this.props.match.params.id + '/players')
            .then(function (response) {
                self.setState({
                    players: response.data.players,
                    playersQueried: true
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        
        instance.get('/teams/' + this.props.match.params.id + '/fixtures')
            .then(function (response) {
                console.log('matches', response.data);
                self.setState({
                    matches: response.data.fixtures
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        
        instance.get('/teams/' + this.props.match.params.id)
            .then(function (response) {
                self.setState({
                    team: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });

        instance.get('/competitions/' + this.props.match.params.league + '/teams')
            .then(function (response) {
                self.setState({
                    teams: response.data.teams
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="teamContainer">
                <TeamHeader 
                    search={this.state.search} 
                    setSearchValue={this.setSearchValue.bind(this)}
                    team={this.state.team} 
                    league={this.props.match.params.league}/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                            <Players players={this.state.players} playersQueried={this.state.playersQueried} search={this.state.search} />
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
export default Team;