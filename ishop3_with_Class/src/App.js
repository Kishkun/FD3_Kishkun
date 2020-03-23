import React from 'react';
import PropTypes from 'prop-types';
import MobileList from './components/mobile/MobileList';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import DisplayItem from './components/mobile/DisplayItem';
import EditItem from './components/mobile/EditItem';

class App extends React.Component {

    state = {
        mobileList: this.props.mobiles,
        selectedItem: null,
        editingItem: null
    };

    deleteItem = (id) => {
        let filteredList = this.state.mobileList.filter(item => {
            return item.id !== id
        });
        this.setState({mobileList: filteredList});
    };

    selectItem = (id) => {
        let selectedItem = this.state.mobileList.find(item => item.id === id);
        this.setState({selectedItem: selectedItem});
    };

    editItem = (id) => {
        let editingItem = this.state.mobileList.find(item => item.id === id);
        this.setState({editingItem: editingItem});
    };

    handleSubmit = (editingItem) => {
        this.setState({editingItem: editingItem});
    };

    render() {
        return (
            <div className="shop_wrapper">
                <Header title={this.props.title}/>
                <main>
                    <MobileList mobiles={this.state.mobileList}
                                deleteItem={this.deleteItem}
                                selectItem={this.selectItem}
                                editItem={this.editItem}
                                selectedItemId={this.state.selectedItem ? this.state.selectedItem.id : null}
                    />
                    {this.state.selectedItem ? <DisplayItem selectedItem={this.state.selectedItem}/> : ''}
                    {this.state.editingItem ?
                        <EditItem editingItem={this.state.editingItem}
                                  handleSubmit={this.handleSubmit}
                        /> : ''}
                </main>
                <Footer/>
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
