import React from 'react';
import PropTypes from 'prop-types';
import CompanyName from './components/NameCompany';

class App extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        companies: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
        clients:PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                firstName: PropTypes.string.isRequired,
                secondName: PropTypes.string.isRequired,
                patronymic: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
                status: PropTypes.bool.isRequired
            })
        ),
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        console.log("MobileCompany render");
        return (
            <div className='company_wrapper'>
                <h1 className='company_title'>{this.props.title}</h1>
                <CompanyName companies={this.props.companies} />
            </div>
        );
    }
}

export default App;
