import React from 'react';
import { render } from 'react-dom';
import styles from './player.scss'

class Player extends React.Component {
    state = {
        photo: {}
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const self = this;
    }

    render() {
        return (
            <div className="panel panel-default player">
                <div className="panel-body">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <div className="shirtImg">
                                <img src="../../src/img/tshirt.svg"
                                    className="img-circle"
                                    alt="{this.props.player.name}"
                                    width="80px" />
                                <span>{this.props.player.jerseyNumber}</span>
                            </div>
                            <h5>{this.props.player.name.toUpperCase()}</h5>
                            <span>{this.props.player.position}</span>
                        </div>
                        <div className="col-xs-6">
                            <i className="mdi mdi-calendar"></i> {this.props.player.dateOfBirth}<br />
                        </div>
                        <div className="col-xs-6 text-right">
                            <i className="mdi mdi-earth"></i> {this.props.player.nationality}<br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default Player;