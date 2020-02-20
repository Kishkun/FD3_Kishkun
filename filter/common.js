let filterTitle = 'Filter it-academy';
let letterEls = ['авантюризм', 'авиатехник', 'балованный', 'вакуольный', 'абсолютный', 'игрушечник', 'лавандовый', 'ясвеилиничего', 'наблюдение', 'палаточный', 'равновесие', 'баллистика', 'саквояжный', 'вальцовщик', 'тайновидец', 'идеография']

﻿let Filter = React.createClass({

    displayName: 'Filter',

    getDefaultProps: function () {
        return {
            title: 'Default title'
        }
    },

    propTypes: {
        title: React.PropTypes.string,
        letterEls: React.PropTypes.array,
        stateLetter: React.PropTypes.array,
        searchInput: React.PropTypes.string,
    },

    getInitialState: function () {
        return {
            searchInput: '',
            stateLetter: this.props.letterEls,
            originList: this.props.letterEls,
            unSortList: this.props.letterEls,
            isChecked: false
        };
    },

    sortListByAlphabet: function () {
        if (!this.state.isChecked) {
            let unSortList = this.state.stateLetter.slice();
            let sortLetter = this.state.stateLetter.sort((a, b) => {
                return (a.toLowerCase() > b.toLowerCase()) ? 1 : -1;
            });
            this.setState({stateLetter: sortLetter, unSortList: unSortList, isChecked: true});
        } else {
            this.setState({stateLetter: this.state.unSortList, isChecked: false});
        }
    },

    filterListByLetter: function (target) {
        let val = target.target.value.toLowerCase();
        let filterLetter = this.state.originList.filter(letter => {
            return letter.toLowerCase().includes(val);
        });
        this.setState({searchInput: val, stateLetter: filterLetter});
    },

    resetListByDefault: function () {
        this.setState({searchInput: '', stateLetter: this.state.originList});
    },

    render: function () {
        let letter = this.state.stateLetter.map((item, index) =>
            React.DOM.span({key: index, className: 'filter_item'}, item),
        );
        return React.DOM.div({className: 'filter_wrapper'},
            React.DOM.h1({className: 'filter_title'}, this.props.title),
            React.DOM.input({type: 'checkbox', className: 'filter_check', onClick: this.sortListByAlphabet}),
            React.DOM.input({
                type: 'text',
                className: 'filter_input',
                onChange: this.filterListByLetter,
                value: this.state.searchInput
            }),
            React.DOM.input({type: 'reset', className: 'filter_reset', onClick: this.resetListByDefault}),
            React.DOM.div({className: 'filter_item_wrapper'}, letter),
        );
    }
});

ReactDOM.render(
    React.createElement(Filter, {title: filterTitle, letterEls: letterEls}),
    document.getElementById('app')
);