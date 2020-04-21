import React from 'react';
import PropTypes from 'prop-types';
import myEvents from './../../events';

class FilterStatusButtons extends React.PureComponent{

    static propTypes = {
        filter: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state={}
    }

    filterButtons = [
        {name: 'all', title: 'Все'},
        {name: 'active', title: 'Активные'},
        {name: 'blocked', title: 'Заблокированые'}
    ];

    render() {
        let buttons = this.filterButtons.map((item) => {
            let isActive = this.props.filter === item.name;
            return(
                <button
                    key={item.name}
                    data-name={item.name}
                    type='button'
                    className={isActive ? 'clients_btn active' : 'clients_btn'}
                    onClick={() => myEvents.emit('onFilterChange', item.name)}
                >{item.title}</button>
            )
        });
        return (
           <div className='filter_block'>
               {buttons}
           </div>
        )
    }
}

export default FilterStatusButtons;