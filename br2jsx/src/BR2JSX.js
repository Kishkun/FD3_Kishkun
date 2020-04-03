import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let block = {
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center',
            width: '200px',
            height: '200px',
            color: '#fff',
            background: 'gray',
            margin: '5vh auto'
        };
        // let re = /(<br>)|(<br \/>)/gi;
        // let newStr = this.props.text.replace(re, '<br/>').split('<br/>');
        // let parts = [];
        // newStr.forEach((text, index) => {
        //     if (index)
        //     parts.push(<br/>);
        //     parts.push(text);
        //     return parts
        // });
        let re = /(<br>)|(<br \/>)/gi;
        let newStr = this.props.text.replace(re, '<br/>').split('<br/>');
        let newText = newStr.map((text, index) => {
            return (
                <React.Fragment key={index}>
                    <br/> {text}
                </React.Fragment>
            )
        });
        return (
            <div className={'br2jsx'}>
                <h1 style={{color:'#000', textAlign: 'center', fontSize: '2vw'}}>{this.props.title}</h1>
                <div style={block}>
                    {/*{newStr.map((text, index) => (*/}
                    {/*    <React.Fragment key={index}>*/}
                    {/*        <br/> {text}*/}
                    {/*    </React.Fragment>*/}
                    {/*))}*/}
                    {newText}
                </div>
            </div>
        );
    }
}

BR2JSX.defaultProps = {

};

BR2JSX.propTypes = {

};

export default BR2JSX;
