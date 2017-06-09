import React from 'react';
import { render } from 'react-dom';
import { Player } from './';

class Players extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    !this.props.players.length && !this.props.playersQueried && 
                    <div className="text-center">
                        <img src="../../src/img/loading.gif" alt="" height="200px"/>
                    </div>
                }
                {!this.props.players.length && this.props.playersQueried && <div className="col-md-12">Players data is unavaliable...</div>}
                {this.props.players.map(player => {
                    return (
                        player.name.toUpperCase().includes(this.props.search.toUpperCase()) &&
                        <div className="col-md-6" >
                            <Player player={player} />
                        </div>
                    );
                })}
            </div>
        );
    }
};
export default Players;