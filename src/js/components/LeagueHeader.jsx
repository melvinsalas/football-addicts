import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './leagueHeader.scss'

class LeagueHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { setSearchValue } = this.props;
        return (
            <div className="leagueheading">
                <div className="headingBackgroud">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <ol className="breadcrumb">
                                    <li><Link to='/'><i className="mdi mdi-arrow-left"></i>Back</Link></li>
                                </ol>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.league.caption}</h1>
                                <p>
                                    <i className="mdi mdi-account-multiple"></i> Teams: {this.props.league.numberOfTeams}<br />
                                    <i className="mdi mdi-counter"></i> Games: {this.props.league.numberOfGames}
                                </p>
                                <input value={this.props.search} onChange={setSearchValue} className="form-control" placeholder="Search Team" />
                            </div>
                            <div className="col-md-offset-2 col-md-4 hidden-sm hidden-xs">
                                <img className="img-responsive img-thumbnail pull-right" src={`../src/img/leagues/${this.props.leagueId}`} alt="" height="100px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default LeagueHeader;