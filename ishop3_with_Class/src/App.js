import React from 'react';
import PropTypes from 'prop-types';
import Mobile from './components/mobile/Mobile';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

class App extends React.Component {

    state = {
        mobileList: this.props.mobiles,
    };

    deleteItem = (id) => {
        let filteredList = this.state.mobileList.filter(item => {
            return item.id !== id
        });
        this.setState({mobileList: filteredList});
        console.log(id);
    };

    render() {
        return (
            <div className="shop_wrapper">
                <Header title={this.props.title}/>
                <main>
                    <Mobile mobiles={this.state.mobileList}
                            deleteItem={this.deleteItem}
                    />
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
