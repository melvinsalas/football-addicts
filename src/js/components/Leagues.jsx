import React from 'react';
import { League } from './';
import styles from './leagues.scss'

class Leagues extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container leagues">
                <div className="row">
                    {   
                        !this.props.leagues.length && 
                        <div className="text-center">
                            <img src="../src/img/loading.gif" alt="" height="200px"/>
                        </div>
                    }
                    {this.props.leagues.map(league => {
                        {
                            return (
                                league.caption.toUpperCase().includes(this.props.search.toUpperCase()) && 
                                <div className="col-md-4" key={league.id} >
                                    <League league={league} /> 
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    }

};

export default Leagues;