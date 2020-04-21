import React from 'react';
import PropTypes from 'prop-types';
import myEvents from './events';
import CompanyName from './components/CompanyName';
import MobileClients from './components/clients/MobileClients';
import AddedClientButton from './components/buttons/AddedClientButton';
import FilterStatusButtons from './components/buttons/FilterStatusButtons';
import EditClientItem from './components/options/EditClientItem';
import AddClientItem from './components/options/AddClientItem';

class App extends React.PureComponent {

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
        this.state = {
            filter: 'all', //active, all, blocked,
            clients: this.props.clients,
            companies: this.props.companies,
            title: this.props.title,
            editingItem: null,
            isShowAddedForm: false
        };
        this.minID = this.props.clients.length;
        myEvents.on('onFilterChange', this.onFilterChange.bind(this));
        myEvents.on('onDeleteItem', this.onDeleteItem.bind(this));
        myEvents.on('onEditItem', this.onEditItem.bind(this));
        myEvents.on('closeForm', this.closeForm.bind(this));
        myEvents.on('onClientChange', this.onClientChange.bind(this));
        myEvents.on('onOpenAddedItem', this.onOpenAddedItem.bind(this));
        myEvents.on('onAddItem', this.onAddItem.bind(this));
    }

    minID = 1;

    createId = (item) => {
        return {
            id: ++this.minID,
            ...item
        };
    };

    filter(clients, filter) {
        switch (filter) {
            case 'all':
                return clients;
            case 'active':
                return clients.filter((item) => item.status);
            case 'blocked':
                return clients.filter((item) => !item.status);
            default:
                return clients;
        }
    }

    onDeleteItem = (id) => {
        let filteredList = this.state.clients.filter(item => item.id !== id);
        this.setState({clients: filteredList});
    };

    onFilterChange = (filter) => {
        this.setState({filter: filter})
    };

    onEditItem = (id) => {
        let editingItem = this.state.clients.find(item => item.id === id);
        this.setState({editingItem: editingItem});
    };

    onClientChange = (client) => {
        this.setState((state) =>{
            let findClient = state.clients.findIndex((el) => el.id === client.id);
            let newClients = [...state.clients];
            newClients[findClient] = client;
            return {
                clients: newClients,
                editingItem: null
            }
        });
    };

    onOpenAddedItem = () => {
        this.setState({isShowAddedForm: true});
    };

    closeForm = () =>{
        this.setState({editingItem: null, isShowAddedForm: false});
    };

    onAddItem = (item) => {
        let newItem = this.createId(item);
        let newList = [...this.state.clients, newItem];
        this.setState({
            clients: newList,
            isShowAddedForm: false,
        });
    };

    render() {
        console.log("MobileCompany render");
        let {filter, clients, companies, title} = this.state;
        let filtered = this.filter(clients, filter);
        return (
            <div className='company_wrapper'>
                <h1 className='company_title'>{title}</h1>
                <CompanyName companies={companies} />
                <hr/>
                <FilterStatusButtons filter={filter} />
                <hr/>
                <MobileClients
                    clients={filtered}/>
                <hr/>
                <AddedClientButton/>
                {this.state.isShowAddedForm ? <AddClientItem/> : false}
                {this.state.editingItem ? <EditClientItem
                    key={this.state.editingItem.id}
                    editingItem={this.state.editingItem} /> : null}
            </div>
        );
    }
}

export default App;
