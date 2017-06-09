import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class TeamHeader extends React.Component {

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
                                    <li><Link to={`/league/${this.props.league}`}><i className="mdi mdi-arrow-left"></i>Back</Link></li>
                                </ol>
                            </div>
                            <div className="col-md-6">
                                <h1>{this.props.team.name}</h1>
                                <input value={this.props.search} onChange={setSearchValue} className="form-control" placeholder="Search Player" />
                            </div>
                            <div className="col-md-offset-2 col-md-4 hidden-sm hidden-xs">
                                <img className="img-responsive img-thumbnail pull-right" src={this.props.team.crestUrl} alt="" height="100px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default TeamHeader;