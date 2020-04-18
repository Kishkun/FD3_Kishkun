import React from 'react';
import PropTypes from 'prop-types';
import CompanyNameButton from './buttons/CompanyNameButton';
import myEvents from './../events';

class CompanyName extends React.PureComponent {

    static propTypes = {
        company: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired
            })
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.companies[0].name,
            companies: this.props.companies,
            activeCompanyId: this.props.companies[0]
        };
        myEvents.on('changedName', this.changedName.bind(this));
    }

    changedName = (item) => {
        this.setState({name: item.name, activeCompanyId: item});
    };

    render() {
        console.log('CompanyName render');
        let companyButtons =  this.state.companies.map(item => {
            return (
                <CompanyNameButton item={item}
                                   key={item.id}
                                   activeCompanyId={this.state.activeCompanyId}
                />
            )
        });
        return (
            <div className='name_block'>
                { companyButtons }
                <p className='name'>Компания: {this.state.name}</p>
            </div>
        );
    }
}

export default CompanyName;