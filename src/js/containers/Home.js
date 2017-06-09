import React from 'react';
import { render } from 'react-dom';
import { Header, SearchBar, Leagues, Footer } from '../components';

class Home extends React.Component {
    state = {
        leagues: [],
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

        instance.get('/competitions')
            .then(function (response) {
                self.setState({
                    leagues: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                {/*<Header/>*/}
                <SearchBar search={this.state.search} setSearchValue={this.setSearchValue.bind(this)} />
                <Leagues search={this.state.search} leagues={this.state.leagues} />
                <Footer />
            </div>
        );
    }
};
export default Home;