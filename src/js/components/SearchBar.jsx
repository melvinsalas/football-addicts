import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import styles from './searchbar.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {setSearchValue} = this.props;
        return (
            <div className="searchBackgroud">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10">
                            <h1>Football Adict <small>the legends of football...</small></h1>
                            <p className="text-center">In Football Addict you can find the most relevant information about the main football 
                                leagues around Europe, teams and players, the scores of last football matches played 
                                in each section. Be part of the most acclaimed sport 
                                in the world, look for your favorite league and enjoy.</p>
                            <div className="col-md-offset-3 col-md-6">
                                <input value={this.props.search} onChange={setSearchValue} className="form-control" placeholder="Search League" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default SearchBar;