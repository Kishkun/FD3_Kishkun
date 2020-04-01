import React from 'react';
import PropTypes from 'prop-types';
import MobileList from './components/mobile/MobileList';
import Header from './components/header/Header';
import AddItem from './components/mobile/AddItem';
import DisplayItem from './components/mobile/DisplayItem';
import EditItem from './components/mobile/EditItem';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileList: this.props.mobiles,
            selectedItem: null,
            editingItem: null,
            isDisabled: false,
            isShowForm: null,
        };
    }

    minID = 6;

    createItem(item) {
        return {
            id: this.minID++,
            ...item
        };
    }

    deleteItem = (id) => {
        let filteredList = this.state.mobileList.filter(item => {
            return item.id !== id
        });
        this.setState({mobileList: filteredList});
    };

    selectItem = (id) => {
        let selectedItem = this.state.mobileList.find(item => item.id === id);
        this.setState({selectedItem: selectedItem, editingItem: null, isShowForm: null, isDisabled: false});
    };

    editItem = (id) => {
        let editingItem = this.state.mobileList.find(item => item.id === id);
        this.setState({editingItem: editingItem, isDisabled: true, selectedItem: null, isShowForm: null});
    };

    closeItem = () => {
        this.setState({editingItem: null, isDisabled: false, selectedItem: null, isShowForm: null});
    };

    handleSubmit = () => {
        this.setState({editingItem: null, isDisabled: false});
    };

    showAddForm = () => {
        this.setState({isShowForm: !this.state.isShowForm, editingItem: null, selectedItem: null, isDisabled: true});
    };

    addItem = (item) => {
        let newItem = this.createItem(item);
        let newList = [...this.state.mobileList, newItem];
        this.setState({
            mobileList: newList,
            isDisabled: false,
            isShowForm: null,
        });
    };

    render() {
        return (
            <div className="shop_wrapper">
                <Header title={this.props.title}/>
                <main className='shop_main'>
                    <MobileList mobiles={this.state.mobileList}
                                deleteItem={this.deleteItem}
                                selectItem={this.selectItem}
                                editItem={this.editItem}
                                isDisabled={this.state.isDisabled}
                                selectedItemId={this.state.selectedItem ? this.state.selectedItem.id : null}/>
                    <button
                        className={this.state.isDisabled ? 'shop_btn add_btn disabled' : 'shop_btn add_btn'}
                        disabled={this.state.isDisabled}
                        onClick={this.showAddForm}>
                        <span className='btn_title'>New product</span>
                    </button>
                    {this.state.isShowForm ?
                        <AddItem addItem={this.addItem}
                                 closeItem={this.closeItem}/> : null}
                    {this.state.selectedItem ?
                        <DisplayItem
                            selectedItem={this.state.selectedItem}
                        /> : null}
                    {this.state.editingItem ?
                        <EditItem
                            key={this.state.editingItem.id}
                            editingItem={this.state.editingItem}
                            isDisabled={this.state.isDisabled}
                            handleSubmit={this.handleSubmit}
                            closeItem={this.closeItem}/> : null}
                </main>
            </div>
        );
    }
}

App.defaultProps = {
    title: 'Online store',
    mobiles: []
};

App.propTypes = {
    title: PropTypes.string.isRequired,
    mobiles: PropTypes.array.isRequired,
};

export default App;
