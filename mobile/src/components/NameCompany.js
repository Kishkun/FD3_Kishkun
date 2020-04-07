import React from 'react';
import PropTypes from 'prop-types';
import ShowButton from './button/ShowButton';

class CompanyName extends React.Component {

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
    }

    showNameCompany = (item) => {
        this.setState({name: item.name, activeCompanyId: item});
    };

    render() {
        console.log('NameCompany render');
        return (
            <div className='name_block'>
                {
                    this.state.companies.map(item => {
                        return (
                            <ShowButton item={item}
                                        key={item.id}
                                        activeCompanyId={this.state.activeCompanyId}
                                        showNameCompany={this.showNameCompany}
                            />
                        )
                    })
                }
                <p className='name'>Компания: {this.state.name}</p>
            </div>
        );
    }
}

export default CompanyName;

// {/*<button onClick={() => this.showNameCompany(item)}*/}
// {/*        type='button'*/}
// {/*        className={this.state.activeCompanyId === item ? 'name_btn active' : 'name_btn'}*/}
// {/*        key={item.id} data-id={item.id}>{item.name}</button>*/}